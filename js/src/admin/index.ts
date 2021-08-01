import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.initializers.add('clarkwinkelmann-email-whitelist', () => {
    app.extensionData
        .for('clarkwinkelmann-email-whitelist')
        .registerSetting({
            setting: 'clarkwinkelmann-email-whitelist.regex',
            label: app.translator.trans('clarkwinkelmann-email-whitelist.admin.settings.regex'),
            help: app.translator.trans('clarkwinkelmann-email-whitelist.admin.settings.regexHelp'),
            type: 'boolean',
        })
        .registerSetting({
            setting: 'clarkwinkelmann-email-whitelist.message',
            label: app.translator.trans('clarkwinkelmann-email-whitelist.admin.settings.message'),
            type: 'text',
        })
        .registerSetting(function (this: ExtensionPage) {
            return m('.Form-group', [
                m('label', app.translator.trans('clarkwinkelmann-email-whitelist.admin.settings.whitelist')),
                m('.helpText', app.translator.trans('clarkwinkelmann-email-whitelist.admin.settings.whitelistHelp')),
                m('textarea.FormControl', {
                    bidi: this.setting('clarkwinkelmann-email-whitelist.whitelist'),
                }),
            ]);
        })
        .registerSetting(function (this: ExtensionPage) {
            return m('.Form-group', [
                m('label', app.translator.trans('clarkwinkelmann-email-whitelist.admin.settings.blacklist')),
                m('.helpText', app.translator.trans('clarkwinkelmann-email-whitelist.admin.settings.blacklistHelp')),
                m('textarea.FormControl', {
                    bidi: this.setting('clarkwinkelmann-email-whitelist.blacklist'),
                }),
            ]);
        });
});
