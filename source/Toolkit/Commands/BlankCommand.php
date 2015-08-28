<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 * @copyright ©2009-2015
 */

namespace Spiral\Toolkit\Commands;

use Spiral\Console\Command;
use Spiral\Toolkit\Generators\BlankViewGenerator;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

/**
 * Create blank view file with specific parent.
 */
class BlankCommand extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $name = 'views:blank';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Create blank view file with specific parent and extended blocks.';

    /**
     * {@inheritdoc}
     */
    protected $arguments = [
        ['name', InputArgument::REQUIRED, 'View filename without extension included.']
    ];

    /**
     * Perform command.
     */
    public function perform()
    {
        /**
         * @var BlankViewGenerator $generator
         */
        $generator = $this->container->construct(BlankViewGenerator::class, [
            'namespace' => $this->option('namespace'),
            'name'      => $this->argument('name'),
            'extension' => $this->option('extension'),
        ]);

        if (!$generator->isUnique()) {
            $this->writeln(
                "<fg=red>View '{$generator->getName()}' is not unique in namespace '{$generator->getNamespace()}'.</fg=red>"
            );

            return;
        }

        $generator->setLayout($this->option('layout'));

        foreach ($this->option('block') as $block) {
            $generator->createBlock($block);
        }

        $generator->render();

        $filename = $this->files->relativePath($generator->getFilename(), directory('application'));
        $this->writeln("<info>Blank view was successfully created:</info> {$filename}");
    }

    /**
     * {@inheritdoc}
     */
    protected function defineOptions()
    {
        return [
            [
                'layout',
                'l',
                InputOption::VALUE_OPTIONAL,
                'Layouts to be extended.',
                'spiral:layouts.blank'
            ],
            [
                'namespace',
                'ns',
                InputOption::VALUE_OPTIONAL,
                'Namespace to create view in, first namespace assigned directory will be used for creation.',
                'default'
            ],
            [
                'block',
                'b',
                InputOption::VALUE_OPTIONAL | InputOption::VALUE_IS_ARRAY,
                'Blocks to be created in view file.',
                ['content']
            ],
            [
                'extension',
                'e',
                InputOption::VALUE_OPTIONAL,
                'View file extension.',
                'php'
            ]
        ];
    }
}