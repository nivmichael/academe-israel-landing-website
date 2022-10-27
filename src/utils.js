import {
    CONST_SPECIAL_URL_UNIVERSITY,
    CONST_UNIVERSITY_BASE_URL,
    CONST_UNIVERSITY_FULL_URL
} from './constants';



/**
 * Formats a URL based on given site that leads to the site homepage
 *
 * @param {type} siteName      site abbreviation string
 *
 * @return {string|bool} formatted url (or false in case of empty input)
 */
export const formatSiteUrlUtil = (siteName) => {
    if (typeof siteName !== 'string' || siteName === '') {
        return false;
    }

    let url = false;

    if(CONST_SPECIAL_URL_UNIVERSITY.indexOf(siteName) !== -1) {
        url = CONST_UNIVERSITY_BASE_URL + siteName + '.acade-me.co.il/';
    }
    else {
        url = CONST_UNIVERSITY_FULL_URL;
        url = url.replace('${site_name}', siteName);
    }

    return url;
}


/**
 * Formats a URL based on given site that leads to the company page of explore-companies section of the site
 *
 * @param {type} siteName      site abbreviation string
 * @param {type} companyId     company id
 * @param {type} sponsorshipId company sponsorship id
 *
 * @return {sting|bool} formatted url (or false in case of empty inputs)
 */
export const formatExploreCompanyUrlUtil = (siteName, companyId, sponsorshipId) => {
    if (typeof siteName !== 'string' ||  siteName === '' || !companyId || !sponsorshipId) {
        return false;
    }

    let url = formatSiteUrlUtil(siteName);

    url = url + 'explore-companies/?view-company=' + companyId + '&sid=' + sponsorshipId;

    return url;
}

export const isRtl = (text) => {
    let rtlChars        = '\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC';
    let rtlDirCheck     = new RegExp('^[^'+rtlChars+']*?['+rtlChars+']');

    return rtlDirCheck.test(text);
}