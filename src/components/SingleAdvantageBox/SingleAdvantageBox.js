import React, { Component } from 'react';
import './SingleAdvantageBox.css';
import './SingleAdvantageBoxResponsive.css';

/* ========= advantages icons ========= */
import sunIcon from '../../images/icons/sun-100x100.png';
import flagIcon from '../../images/icons/flag-100x100.png';
import rocketIcon from '../../images/icons/rocket-100x100.png';
import eyeIcon from '../../images/icons/eye-100x100.png';
import pieIcon from '../../images/icons/pie-100x100.png';
import globeIcon from '../../images/icons/globe-100x100.png';
import checkIcon from '../../images/icons/check-100x100.png';
import lookingGlassIcon from '../../images/icons/looking-glass-100x100.png';
import megaphoneIcon from '../../images/icons/megaphone-100x100.png';

const advantagesResources = {
    central_arena: {
        src: sunIcon,
        alt: 'הזירה המרכזית',
        title: 'הזירה המרכזית',
        text: `היא פלטפורמה ייחודית וחדשנית המייצרת אינסוף הזדמנויות AcadeME
                ונותנת מענה שלם וחכם לסטודנטים ובוגרים, מעסיקים וחברות
                ולמרכזי פיתוח קריירה במוסדות האקדמיים בישראל.`
    },
    grounded: {
        src: flagIcon,
        alt: 'חיים את השטח',
        title: 'חיים את השטח',
        text: `ותקנת ועובדת בשיתוף פעולה מלא ומוצלח AcadeME מערכת
                עם רוב המוסדות האקדמיים המובילים בישראל
                ובעלת מאגר הסטודנטים והבוגרים הגדול ביותר בישראל.`
    },
    market_and_share: {
        src: rocketIcon,
        alt: 'מקדמים ומשתפים',
        title: 'מקדמים ומשתפים',
        text: `אפשרת למעסיקים לקדם, לשתף ולפרסם את משרותיהם AcadeME
                בין המוסדות האקדמיים - בלחיצת כפתור. למתג ולפרט על החברה ופועלה,
                לצרף לוגו, וידאו, תמונות, פרזנטציית חברה ועוד. מצד שני היא מאפשרת
                למועמדים ליצור לעצמם פרופיל מפורט ועשיר במערכת הכולל את האפשרות
                להעלות ולצרף מסמכים, גליונות ציונים, וידאו, תמונות, תיק עבודות, קישורים
                לרשתות חברתיות, קורות חיים ועוד.`
    },
    expenses_and_time: {
        src: eyeIcon,
        alt: 'חוסכים זמן וכסף',
        title: 'חוסכים זמן וכסף',
        text: `באמצעות אלגוריתם התאמה וחיפוש מתקדם, הפועל על פי שיטות ויישומים
                חדשניים אשר פותחו ע''י מומחים מובילים בתחומי הפסיכולוגיה,
                הזדמנות למעסיקים לקבל את AcadeME משאבי האנוש ותוכנה, מעניקה
                המועמדים המתאימים ביותר למשרות. המערכת ממיינת ומסננת
                מועמדים והצעות עבודה ויוצרת התאמה מרבית בין המועמדים
                ובין המשרה המבוקשת.`
    },
    everybody_there: {
        src: pieIcon,
        alt: 'כולם שם',
        title: 'כולם שם',
        text: `במהלך 4 שנות פעילותה הפכה למערכת הפופולארית ביותר AcadeME
                בקרב המעסיקים והחברות בישראל אשר משתמשים ומגייסים דרכה
                באופן קבוע סטודנטים ובוגרים לעבודה.
                ,AcadeME מבין 10,000 החברות והמעסיקים המשתמשים במערכת
                ניתן למצוא את כל החברות הגדולות במשק מכל התחומים והמגזרים,
                גופי ומשרדי ממשלה וכל החברות הבינלאומיות הגדולות הפועלות בישראל.`
    },
    big_data_stock: {
        src: globeIcon,
        alt: '',
        title: false,
        text: `גישה למאגר הגדול ביותר של סטודנטים ובוגרים מהמוסדות האקדמיים המובילים בישראל`
    },
    efficient_process: {
        src: checkIcon,
        alt: '',
        title: false,
        text: `יעול תהליך גיוס המועמדים החוסך זמן רב ומשאבים לארגון`
    },
    accurate_matches: {
        src: lookingGlassIcon,
        alt: '',
        title: false,
        text: `סינון והתאמה מרבית של המועמדים בהתאם לדרישות המשרה`
    },
    market_variety: {
        src: megaphoneIcon,
        alt: '',
        title: false,
        text: `מגוון מסלולי קידום \nופרסום משרות`
    }
}

const CONST_EMPLOYER_CONTAINER  = 'EMPLOYER_CONTAINER';
const CONST_EMPLOYER_BOX        = 'EMPLOYER_BOX';

export default class SingleAdvantageBox extends Component {

    /**
     * Toggles between classes that change the style of the component when displaying for employers
     *
     * @param {Boolean} employer_only_flag - if employer dedicated
     * @param {String} element_type - type of element that classes will be attached to
     * @returns {String} string that contains proper class names
     */
    isEmployerType = (employer_only_flag, element_type) => {
        let class_list = '';

        if(employer_only_flag) {
            if(element_type == CONST_EMPLOYER_CONTAINER) { class_list = ' pure-u-lg-1-4'; }
            else if(element_type == CONST_EMPLOYER_BOX) { class_list = ' no-background no-shadow text-with-padding box-sm'; }
        }
        else {
            if(element_type == CONST_EMPLOYER_CONTAINER) { class_list = ' pure-u-lg-1-3 additional-padding'; }
        }

        return class_list;
    }

    render() {
        return (
            <div id="single-advantage-box-component" className={ 'pure-u-1 pure-u-md-1-2' + this.isEmployerType(this.props.employerOnly, CONST_EMPLOYER_CONTAINER) }>
                <div className="pure-u-1">
                    <div className={ 'box' + this.isEmployerType(this.props.employerOnly, CONST_EMPLOYER_BOX) }>
                        <img className="pure-img"
                            src={ advantagesResources[this.props.advantage].src }
                            alt={ advantagesResources[this.props.advantage].alt }>
                        </img>
                        <h1 className={ (advantagesResources[this.props.advantage].title === false) ? 'no-title' : '' }>
                            { advantagesResources[this.props.advantage].title }
                        </h1>
                        <p className={ this.props.advantage == 'market_variety' ? 'pre-wrap-text' : '' }>
                            { advantagesResources[this.props.advantage].text }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
