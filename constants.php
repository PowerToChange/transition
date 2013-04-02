<?php 
$root = '/transition';
if(preg_match('#local.transition.com#', $_SERVER['SERVER_NAME'])) $root = '';

$home = $root . '/home/';
if(preg_match('#/home#', $_SERVER['REQUEST_URI'])) $home = '';

define('HOME_LINK', $root . '/home/');
define('JOIN_LINK', $root . '/join/');
define('CAMPUS_TOUR_TOP_LINK', $home . '#campus_tours');
define('CAMPUS_TOUR_LINK', $home . '#campus_tours');
define('FAQ_LINK', $home . '#faq');
define('BIBLE_STUDY_LINK', $root . '/bible-study/');
define('ROOT_PATH', $root);
define('FIND_MY_CAMPUS_TOP_LINK', $home . '#find_my_campus');
define('FIND_MY_CAMPUS_LINK', 'http://powertochange.com/students/find-my-campus/');
define('DISCUSS_LINK', 'https://facebook.com/groups/p2ctransition/');




?>
