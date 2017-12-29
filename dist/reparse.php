<?php

$string = file_get_contents("../src/oldformat.json");
$json = json_decode($string, true);

//$classes = ["d9","e8","f7","g6","h5","h6","h7","h8","h9","h11","js5","js6","js13","js14","k5","k6","m5","m6","n5","n6","p6","r6","s6","s7"];
$classes = ["D10","E9","F7","F8","G7","G9","H6","H7","H8","H9","H11","H12","H13","JS7","JS9","K6","K7","M6","M7","N7","N9","P7","P9"];
$ranges = [3,6,10,18,30,50,65,80,100,120,140,160,180,200,225,250,280,315,355,400];

function getUpperTol($json,$range,$class)
{
    foreach($json as $item)
    {
        if($item["bis"] == $range){
            return $item[$class][0];
        }
    }
}
function getLowerTol($json,$range,$class)
{
    foreach($json as $item)
    {
        if($item["bis"] == $range){
            return $item[$class][1];
        }
    }
}

// echo '<h2>';
// echo getUpperTol($json,3, "H9");
// echo ' / ';
// echo getLowerTol($json,3, "H9");
// echo '</h2>';

foreach($classes as $class)
{
    foreach($ranges as $range)
    {
        $result[$class][$range] = ["upper" => getUpperTol($json,$range,$class), "lower" => getLowerTol($json,$range,$class)];
    }
}

echo '<pre>';
echo json_encode($result);
echo '</pre>';

// echo '<br/><hr/><pre>';
// print_r($json);
// echo '</pre>';
