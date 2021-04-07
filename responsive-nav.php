<?php
/**
 * The basic markup componants for Hook Agency's Responsive Menu Framework
 * 
 */
?>

<button id="hamburger" class="hamburger" role="menu" title="Mobile Menu Button" aria-label="mobile menu button">
    <div class="hamburger__line top"></div>
    <div class="hamburger__line middle"></div>
    <div class="hamburger__line bottom"></div>
</button>

<!-- Mobile Menu Wrapper -->
<div id="mobile-nav" class="mobile-menu__wrapper">
    <nav class="mobile-menu" role="navigation" title="Mobile Menu" aria-label="mobile menu">
        <?php wp_nav_menu( array( 'menu' => 'Mobile Menu', 'menu_id' => 'mobile-menu')); ?>
    </nav>
</div>