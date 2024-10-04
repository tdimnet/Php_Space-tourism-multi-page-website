<?php

require_once("./vendor/autoload.php");

$request = $_SERVER['REQUEST_URI'];
$viewDir = '/views/';


$loader = new \Twig\Loader\FilesystemLoader('./views');
$twig = new \Twig\Environment($loader);



switch ($request) {
    case '':
    case '/':
        echo $twig->render('home.twig');
        break;


    case '/crew':
        echo $twig->render('crew.twig');
        break;

    case '/destination':
        echo $twig->render('destination.twig');
        break;

    case '/technology':
        echo $twig->render('technology.twig');
        break;

    default:
        http_response_code(404);
        echo $twig->render('404.twig');
}
