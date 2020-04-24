<?php

/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 */

declare(strict_types=1);

namespace Spiral\Toolkit\Visitor;

use Spiral\Stempler\Node\Block;
use Spiral\Stempler\Node\HTML\Attr;
use Spiral\Stempler\Node\HTML\Tag;
use Spiral\Stempler\Node\Mixin;
use Spiral\Stempler\Node\Raw;
use Spiral\Stempler\VisitorContext;
use Spiral\Stempler\VisitorInterface;

/**
 * Automatically issues unique IDs for inputs and labels. Visitor expends the `id` or `for` attribute to be defined
 * with ${id} block inside it.
 */
final class GenerateIDs implements VisitorInterface
{
    // id group definition and completion
    private const ID_GROUP   = 'inputID:define';
    private const ID_CONSUME = 'inputID:consume';

    /** @var int */
    private static $nextID = 1000;

    /**
     * @inheritDoc
     */
    public function enterNode($node, VisitorContext $ctx)
    {
        if (!$node instanceof Attr) {
            return;
        }

        if ($node->name === self::ID_GROUP) {
            $tag = $ctx->getParentNode();
            if ($tag instanceof Tag) {
                // create new ID sequence
                $tag->setAttribute(self::class, $this->nextID());
            }
        }

        if ($node->name === self::ID_CONSUME) {
            $tag = $ctx->getParentNode();
            if ($tag instanceof Tag) {
                // follow the ID sequence defined by the parent
                $tag->setAttribute(self::class, self::ID_CONSUME);
            }
        }
    }

    /**
     * @inheritDoc
     */
    public function leaveNode($node, VisitorContext $ctx)
    {
        if ($node instanceof Attr && in_array($node->name, [self::ID_GROUP, self::ID_CONSUME], true)) {
            return self::REMOVE_NODE;
        }

        if ($node instanceof Tag && $node->getAttribute(self::class) == self::ID_CONSUME) {
            $idAttr = null;
            foreach ($node->attrs as $attr) {
                if (in_array($attr->name, ['id', 'for'])) {
                    $idAttr = $attr;
                    break;
                }
            }

            $block = $this->idBlock($idAttr);
            if ($block === null || $block->nodes !== []) {
                // block not defined or contains user value
                return null;
            }

            // looking for the group
            foreach (array_reverse($ctx->getScope()) as $parent) {
                if ($parent === $ctx->getCurrentNode()) {
                    continue;
                }

                if ($parent instanceof Tag && $parent->getAttribute(self::class) !== null) {
                    $block->nodes = [new Raw($parent->getAttribute(self::class))];
                    break;
                }
            }
        }

        return null;
    }

    /**
     * Issue next, template unique, input it.
     *
     * @return string
     */
    private function nextID(): string
    {
        return 'i-' . dechex(self::$nextID++);
    }

    /**
     * Returns blocks from within the attribute.
     *
     * @param Attr|null $attr
     * @return Block|null
     */
    private function idBlock(Attr $attr = null): ?Block
    {
        if ($attr === null || !$attr->value instanceof Mixin) {
            // not a proper block definition
            return null;
        }

        $nodes = $attr->value->nodes;
        if (!isset($nodes[1]) || !$nodes[1] instanceof Block) {
            return null;
        }

        return $nodes[1];
    }
}
