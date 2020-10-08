<!-- recusively remove directory... -->

<?php

//recursively remove directories
function recursive_rmdir($dir) { 
    if (is_dir($dir)) { 
      $objects = scandir($dir); 
      foreach ($objects as $object) { 
        if ($object != "." && $object != "..") { 
          if (filetype($dir."/".$object) == "dir") recursive_rmdir($dir."/".$object); 
          else unlink($dir."/".$object); 
        } 
      } 
      reset($objects); 
      rmdir($dir); 
    } 
  }

  //filter string from sql injections
  function filter_string($input)
	{
		return htmlspecialchars(mysqli_real_escape_string(trim($input)));
	}