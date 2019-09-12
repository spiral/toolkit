<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 */

namespace Spiral\Toolkit;

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\UriInterface;
use Spiral\Http\Routing\RouteInterface;
use Spiral\Pagination\PaginatorInterface;

/**
 * Helps to generate uris for paginator. Must be created INSIDE request scope.
 */
class PaginationHelper
{
    /**
     * @var RouteInterface
     */
    private $route;

    /**
     * @var ServerRequestInterface
     */
    private $request;

    /**
     * @param RouteInterface         $route
     * @param ServerRequestInterface $request
     */
    public function __construct(RouteInterface $route, ServerRequestInterface $request)
    {
        $this->route = $route;
        $this->request = $request;
    }

    /**
     * @param PaginatorInterface $paginator
     * @param int                $pageNumber
     *
     * @return UriInterface
     */
    public function uri(PaginatorInterface $paginator, int $pageNumber): UriInterface
    {
        return $this->route->uri([$paginator->getParameter() => $pageNumber]);
    }
}