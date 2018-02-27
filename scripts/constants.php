<?php

const APP_MAIL_PWD_SETTING = 'mail_pwd';

if (IS_PRODUCTION_ENV) {
    define('APP_CONFIG_FILE',
    '../../dreamhost_files/app.config');
}
else {
    define('APP_CONFIG_FILE',
    '../../../../dreamhost_files/app.config');
}

?>
