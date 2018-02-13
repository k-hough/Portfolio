<?php

function mailPwdget() {

    $pwd = null;
    if (file_exists(APP_CONFIG_FILE)) {
        $settings = parse_ini_file(APP_CONFIG_FILE, INI_SCANNER_TYPED);
        if (isset($settings[APP_MAIL_PWD_SETTING])) {
            $pwd = $settings[APP_MAIL_PWD_SETTING];
        }
    }
    return $pwd;
}

?>
