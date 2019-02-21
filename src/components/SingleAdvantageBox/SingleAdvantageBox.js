import React, { Component } from 'react';
import './SingleAdvantageBox.css';
import './SingleAdvantageBoxResponsive.css';

/* ========= advantages icons ========= */
import sunIcon from '../../images/icons/sun-100x100.png';
import flagIcon from '../../images/icons/flag-100x100.png';
import rocketIcon from '../../images/icons/rocket-100x100.png';
import eyeIcon from '../../images/icons/eye-100x100.png';
import pieIcon from '../../images/icons/pie-100x100.png';
import starIcon from '../../images/icons/star-100x100.png';
import globeIcon from '../../images/icons/globe-100x100.png';
import checkIcon from '../../images/icons/check-100x100.png';
import lookingGlassIcon from '../../images/icons/looking-glass-100x100.png';
import megaphoneIcon from '../../images/icons/megaphone-100x100.png';

const advantagesResources = {
    central_arena: {
        src: sunIcon,
        alt: 'הזירה המרכזית',
        title: 'הזירה המרכזית',
        text: 'AcadeME  היא פלטפורמה ייחודית וחדשנית המייצרת אינסוף הזדמנויות המחברת בהצלחה בין סטודנטים ובוגרים - מעסיקים והזדמנויות תעסוקתיות - ומרכזי פיתוח קריירה במוסדות האקדמיים בישראל, בעזרת מגוון רחב של פתרונות חכמים ומתקדמים.'
    },
    grounded: {
        src: flagIcon,
        alt: 'חיים את השטח',
        title: 'חיים את השטח',
        text: 'AcadeME מותקנת במחלקות לפיתוח קריירה במוסדות האקדמיים השונים ומשמשת - כמערכת הניהול המרכזית והמקיפה לכל התנהלות המרכז לפיתוח הקריירה במוסד האקדמי. AcadeME  עובדת בשיתוף פעולה מלא ומוצלח עם רוב המוסדות האקדמיים המובילים בישראל, ובעלת מאגר הסטודנטים והבוגרים הגדול ביותר בישראל.'
    },
    market_and_share: {
        src: rocketIcon,
        alt: 'מקדמים ומשתפים',
        title: 'מקדמים ומשתפים',
        text: 'AcadeME מאפשרת למעסיקים לקדם, לשתף ולפרסם את משרותיהם בין המוסדות האקדמיים - בלחיצת כפתור. המעסיקים יכולים למתג ולפרט על החברה ופועלה, לצרף לוגו, וידאו, תמונות, פרזנטציית חברה ועוד. בנוסף, חברת AcadeME מציעה למעסיקים ולחברות המגייסות מגוון פתרונות קידום משרות חדשניים וייחודים.'
    },
    expenses_and_time: {
        src: eyeIcon,
        alt: 'חוסכים זמן וכסף',
        title: 'חוסכים זמן וכסף',
        text: 'באמצעות אלגוריתם התאמה וחיפוש מתקדם, הפועל על פי שיטות ויישומים חדשניים אשר פותחו על ידי מומחים מובילים בתחומי הפסיכולוגיה, משאבי האנוש ותוכנה, מעניקה AcadeME הזדמנות  למעסיקים לקבל את המועמדים המתאימים ביותר למשרות. המערכת ממיינת ומסננת מועמדים והצעות עבודה ויוצרת התאמה מרבית בין המועמדים ובין המשרה המבוקשת.'
    },
    everybody_there: {
        src: pieIcon,
        alt: 'כולם שם',
        title: 'כולם שם',
        text: 'AcadeME  במהלך 4 שנות פעילותה הפכה למערכת הפופולארית ביותר בקרב המעסיקים והחברות בישראל אשר משתמשים ומגייסים דרכה באופן קבוע סטודנטים ובוגרים לעבודה.  מבין 10,000 החברות והמעסיקים המשתמשים במערכת AcadeME, ניתן למצוא את כל החברות הגדולות במשק מכל התחומים והמגזרים, גופי ומשרדי ממשלה וכל החברות הבינלאומיות הגדולות הפועלות בישראל.'
    },
    beyond_cv: {
        src: starIcon,
        alt: 'מעבר לקורות חיים',
        title:'מעבר לקורות חיים',
        text: 'מערכת AcadeME מאפשרת לסטודנטים והבוגרים ליצור לעצמם פרופיל      דיגיטלי מפורט ועשיר במערכת, הכולל את האפשרות להעלות ולצרף            מסמכים, גיליונות ציונים, וידאו, תמונות, תיק עבודות, קישורים לרשתות        חברתיות, קורות חיים ועוד.        בעזרת מערכת AcadeME המתקדמת לא מפספסים שום הזדמנות.    AcadeME היא מערכת דינמית העובדת בשביל המועמדים בצורה אוטומטיתויודעת להתאים, לאתר וליידע אותם על ההזדמנויות החדשות והרבות.'    },
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
                        <p className={ this.props.advantage == 'market_variety' ? 'pre-wrap-text bold_text' : '' }>
                            { advantagesResources[this.props.advantage].text }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
