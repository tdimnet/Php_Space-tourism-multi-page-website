<?php

require_once("./vendor/autoload.php");

$loader = new \Twig\Loader\ArrayLoader([
    'index' => 'Hello {{ name }}!',
]);

$twig = new \Twig\Environment($loader);

$request = $_SERVER['REQUEST_URI'];
$viewDir = '/views/';

switch ($request) {
    case '':
    case '/':
        // echo("Hello, World!");
        echo $twig->render('index', ['name' => 'Thomas']);
        break;


    case '/crew':
        require __DIR__ . $viewDir . 'crew.php';
        break;

    case '/destination':
        require __DIR__ . $viewDir . 'destination.php';
        break;

    case '/technology':
        require __DIR__ . $viewDir . 'technology.php';
        break;

    default:
        http_response_code(404);
        require __DIR__ . $viewDir . '404.php';
}
