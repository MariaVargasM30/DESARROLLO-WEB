<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'DESARROLLO-WEB' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'V?-(8Un4ER:!qHNw^0M:2S_w*gbgeWkji.ri(DhJF$83@Y0%F7Bf0-7`J61u/pY+' );
define( 'SECURE_AUTH_KEY',  '+sL_-k9RtO;f1%trY<k%pUWk2lIXFE8q^fL,.J(C*%OxEL6b4V8U3|qmX#D5EnYI' );
define( 'LOGGED_IN_KEY',    '!>T N>;iJJh}JxHK]H[`SF.Kk&)vI|`E<SHMxKE(89`4YzmTI+OSc!PPIbQ:ikqo' );
define( 'NONCE_KEY',        'S>qDBZ?8S&;>l9:%b1)Jgb*p$%;]SfK*3%hm,`zAR(C9Rao#g7X. !%VlEz4Ayrn' );
define( 'AUTH_SALT',        'H7x+LIjjOEiw:`Xi0 .{P_;oCB%qE2tX5(i:Z/+IUSVR-hgdRe)WW V!_;g@MnmJ' );
define( 'SECURE_AUTH_SALT', 'YxQk`rCYoyIc`?DqkJ*.rp$!nl.)%q48&dDQ-Z16x5O6gSforg]22cC0;**+4}&y' );
define( 'LOGGED_IN_SALT',   '+YvD,E`9o?-uTO~=xi64]#SQc`2%oM{9,0G{[#1|ZqZd%kTX@5[Y**;W=_7<GfhE' );
define( 'NONCE_SALT',       'i=>)Hh,{`nfM`2|7Mlr@5#-Z(!]}e9b&$|Y`w1^;:EfAF8qfU|Ue l1d7xcu4fX|' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
