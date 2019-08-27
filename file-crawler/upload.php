<?php
  session_start();
  if (isset($_SESSION['active'])) {
    
  } else {
    header('Location: index.php');
  }
?>
