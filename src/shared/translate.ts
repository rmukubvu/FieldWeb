
import {TranslateService} from '@ngx-translate/core';

export const TRANSLATE_STORAGE_KEY = 'field-translate-lang';

export function getSelectedLanguage(translateService: TranslateService): string {
  const storedLanguage: string = sessionStorage.getItem(TRANSLATE_STORAGE_KEY);
  return storedLanguage && translateService.getLangs().indexOf(storedLanguage) > -1
      ? storedLanguage : translateService.getLangs().indexOf(translateService.getBrowserLang()) > -1
      ? translateService.getBrowserLang() : translateService.getDefaultLang();
}
