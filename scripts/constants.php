<?php

const APP_IS_PRODUCTION = false;
const APP_MAIL_PWD_SETTING = 'mail_pwd';

if (APP_IS_PRODUCTION) {
    define('APP_CONFIG_FILE',
    '/home/keihou2/dreamhost_files/app.config');
}
else {
    define('APP_CONFIG_FILE',
    '/Users/Keith/dreamhost_files/app.config');
}

?>
