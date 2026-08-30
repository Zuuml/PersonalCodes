(() => {
    const T= {
        ru: {
            code:'RU',currency:'RUB',locale:'ru-RU',rate:1,round:1000,
            nav_home:'Главная',nav_catalog:'Каталог',nav_finishes:'Покрытия',nav_tech:'Технологии',nav_projects:'Проекты',nav_contact:'Контакты',quote:'Рассчитать комплект',
            hero_k:'FORGED WHEELS / MADE TO FIT',hero_a:'ДИСКИ',hero_b:'В ЦЕНТРЕ',hero_c:'ВСЕГО',hero_p:'Не автомобиль как фон для продукта, а сам диск как главный объект — геометрия, поверхность, посадка и характер',explore:'Смотреть модели',
            home_about:'Сайт построен вокруг диска',home_about_p:'Каталог, отдельные страницы моделей, покрытия, технология производства и реальные посадки на автомобилях — без ощущения одностраничного промо-лендинга',
            cat_title:'КАТАЛОГ',cat_p:'Выбирай направление дизайна. Размер, ширина, ET и посадка рассчитываются под конкретный автомобиль',all:'Все',sport:'Sport',luxury:'Luxury',classic:'Classic',aero:'Aero',details:'Подробнее',from:'от',set:'комплект',
            fin_title:'ПОКРЫТИЯ',fin_p:'Финиш меняет характер диска не меньше, чем форма спиц',tech_title:'ТЕХНОЛОГИИ',tech_p:'От параметров автомобиля до обработки и финального контроля',projects_title:'ПРОЕКТЫ',projects_p:'Автомобиль здесь только показывает, как диск работает в реальной посадке',contact_title:'СВЯЗАТЬСЯ',contact_p:'Модель автомобиля, желаемый размер и пара референсов — этого достаточно, чтобы начать расчёт',name:'Имя',car:'Автомобиль',size:'Размер',message:'Комментарий',send:'Отправить запрос',
            back:'Назад в каталог',diameter:'Диаметры',finish:'Покрытие',weight:'Вес',design:'Геометрия',price:'Ориентир',model_text:'Каждая модель адаптируется под конкретный автомобиль: тормоза, вылет, ширину, ступицу и желаемую посадку',
            cta_title:'СОБЕРЁМ ТВОЙ КОМПЛЕКТ',cta_p:'Выбери модель или просто пришли референс — дальше подберём параметры и отделку',cta_btn:'Перейти к расчёту',
            footer:'FORGED — forged wheels'
        }
        ,
        en: {
            code:'EN',currency:'USD',locale:'en-US',rate:.012,round:10,
            nav_home:'Home',nav_catalog:'Catalog',nav_finishes:'Finishes',nav_tech:'Technology',nav_projects:'Projects',nav_contact:'Contact',quote:'Build your set',
            hero_k:'FORGED WHEELS / MADE TO FIT',hero_a:'WHEELS',hero_b:'AT THE',hero_c:'CENTER',hero_p:'The wheel is the product — geometry, surface, fitment and character. Cars are only the context',explore:'Explore models',
            home_about:'Built around the wheel',home_about_p:'Catalog, dedicated model pages, finishes, production technology and real fitment projects — not a one-page promo',
            cat_title:'CATALOG',cat_p:'Choose a design direction. Diameter, width, offset and fitment are calculated for the exact vehicle',all:'All',sport:'Sport',luxury:'Luxury',classic:'Classic',aero:'Aero',details:'Details',from:'from',set:'set',
            fin_title:'FINISHES',fin_p:'Surface treatment changes the character of a wheel as much as spoke design',tech_title:'TECHNOLOGY',tech_p:'From vehicle parameters to machining and final inspection',projects_title:'PROJECTS',projects_p:'The car only shows how the wheel works in a real fitment',contact_title:'CONTACT',contact_p:'Car model, preferred size and a few references are enough to start a quote',name:'Name',car:'Vehicle',size:'Size',message:'Notes',send:'Send request',
            back:'Back to catalog',diameter:'Diameters',finish:'Finish',weight:'Weight',design:'Geometry',price:'Estimate',model_text:'Every model is adapted to the exact vehicle: brakes, offset, width, hub and desired fitment',
            cta_title:'BUILD YOUR SET',cta_p:'Choose a model or send a reference — we will take care of fitment and finish',cta_btn:'Request a quote',footer:'FORGED — forged wheels'
        }
        ,
        ja: {
            code:'日本語',currency:'JPY',locale:'ja-JP',rate:1.75,round:1000,
            nav_home:'ホーム',nav_catalog:'カタログ',nav_finishes:'仕上げ',nav_tech:'製造技術',nav_projects:'実績',nav_contact:'お問い合わせ',quote:'セットを見積もる',
            hero_k:'FORGED WHEELS / MADE TO FIT',hero_a:'ホイール',hero_b:'そのものが',hero_c:'主役',hero_p:'主役はクルマではなくホイール。形状、表面、フィットメント、存在感を中心に見せます',explore:'モデルを見る',
            home_about:'ホイールを中心に設計',home_about_p:'カタログ、各モデル専用ページ、仕上げ、製造技術、実車装着例まで用意した複数ページ構成',
            cat_title:'カタログ',cat_p:'デザインの方向性を選択。径、幅、オフセット、フィットメントは車両ごとに算出します',all:'すべて',sport:'スポーツ',luxury:'ラグジュアリー',classic:'クラシック',aero:'エアロ',details:'詳細',from:'価格',set:'1セット',
            fin_title:'仕上げ',fin_p:'表面仕上げはスポーク形状と同じくらいホイールの印象を変えます',tech_title:'製造技術',tech_p:'車両パラメータから加工、最終検査まで',projects_title:'実績',projects_p:'車両はホイールの実際のフィットメントを見せるための背景です',contact_title:'お問い合わせ',contact_p:'車種、希望サイズ、参考画像があれば最初の見積もりを始められます',name:'お名前',car:'車種',size:'サイズ',message:'コメント',send:'見積もり依頼を送る',
            back:'カタログへ戻る',diameter:'サイズ',finish:'仕上げ',weight:'重量',design:'形状',price:'参考価格',model_text:'各モデルはブレーキ、オフセット、幅、ハブ、希望のフィットメントに合わせて車両ごとに設計されます',
            cta_title:'あなたのセットを作る',cta_p:'モデルを選ぶか参考画像を送ってください。サイズと仕上げはこちらで詰めます',cta_btn:'見積もりへ',footer:'FORGED — forged wheels'
        }
        ,
        zh: {
            code:'中文',currency:'CNY',locale:'zh-CN',rate:.086,round:10,
            nav_home:'首页',nav_catalog:'产品目录',nav_finishes:'表面处理',nav_tech:'制造技术',nav_projects:'案例',nav_contact:'联系我们',quote:'计算整套方案',
            hero_k:'FORGED WHEELS / MADE TO FIT',hero_a:'轮毂',hero_b:'才是',hero_c:'主角',hero_p:'汽车只是背景，真正的产品是轮毂本身：几何、表面、姿态与性格',explore:'查看款式',
            home_about:'围绕轮毂构建',home_about_p:'产品目录、独立型号页面、表面处理、制造技术与真实装车案例，不再只是单页宣传站',
            cat_title:'产品目录',cat_p:'先选择设计方向，直径、宽度、ET值与最终姿态会根据具体车辆计算',all:'全部',sport:'运动',luxury:'豪华',classic:'经典',aero:'空气动力',details:'查看详情',from:'起',set:'整套',
            fin_title:'表面处理',fin_p:'表面工艺对轮毂性格的影响不亚于辐条造型',tech_title:'制造技术',tech_p:'从车辆参数到加工与最终质检',projects_title:'案例',projects_p:'汽车只用于展示轮毂在真实姿态中的效果',contact_title:'联系我们',contact_p:'车型、期望尺寸和几张参考图，就足够开始第一次报价',name:'姓名',car:'车型',size:'尺寸',message:'备注',send:'发送询价',
            back:'返回产品目录',diameter:'直径',finish:'表面处理',weight:'重量',design:'几何',price:'参考价格',model_text:'每个型号都会根据具体车辆调整：刹车、ET值、宽度、中心孔与目标姿态',
            cta_title:'打造你的轮毂套装',cta_p:'选择一个型号或直接发送参考图，我们会继续处理参数和表面效果',cta_btn:'开始询价',footer:'FORGED — forged wheels'
        }
    }
    ;
    const region= {
        ru: {
            currency:'RUB',locale:'ru-RU',rate:1,round:1000
        }
        ,en: {
            currency:'USD',locale:'en-US',rate:.012,round:10
        }
        ,ja: {
            currency:'JPY',locale:'ja-JP',rate:1.75,round:1000
        }
        ,zh: {
            currency:'CNY',locale:'zh-CN',rate:.086,round:10
        }
    }
    ;
    function detect() {
        const s=localStorage.getItem('forged-lang');
        if(s&&T[s])return s;
        const l=(navigator.language||'ru').toLowerCase();
        if(l.startsWith('ja'))return'ja';
        if(l.startsWith('zh'))return'zh';
        if(l.startsWith('en'))return'en';
        return'ru'
    }
    function price(v,lang,withFrom=true) {
        const c=region[lang],t=T[lang];
        const n=Math.round((v*c.rate)/c.round)*c.round;
        let f=new Intl.NumberFormat(c.locale, {
            style:'currency',currency:c.currency,maximumFractionDigits:0
        }
        ).format(n);
        return (withFrom?t.from+' ':'')+f
    }
    function apply(lang) {
        const t=T[lang]||T.ru;
        document.documentElement.lang=lang==='zh'?'zh-CN':lang;
        document.querySelectorAll('[data-i18n]').forEach(e=> {
            let k=e.dataset.i18n;
            if(t[k]!=null)e.textContent=t[k]
        }
        );
        document.querySelectorAll('[data-price]').forEach(e=>e.textContent=price(+e.dataset.price,lang,true));
        document.querySelectorAll('[data-locale-label]').forEach(e=>e.textContent=t.code+' · '+region[lang].currency);
        document.querySelectorAll('[data-lang]').forEach(e=>e.classList.toggle('active',e.dataset.lang===lang));
        localStorage.setItem('forged-lang',lang);
        window.dispatchEvent(new CustomEvent('langchange', {
            detail: {
                lang,t
            }
        }
        ))
    }
    function setup() {
        document.querySelectorAll('.locale-btn').forEach(b=>b.onclick=e=> {
            e.stopPropagation();
            b.closest('.locale').classList.toggle('open')
        }
        );
        document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=> {
            apply(b.dataset.lang);
            document.querySelectorAll('.locale').forEach(x=>x.classList.remove('open'))
        }
        );
        document.addEventListener('click',()=>document.querySelectorAll('.locale').forEach(x=>x.classList.remove('open')));
        apply(detect())
    }
    window.FI18N= {
        T,region,price,apply,detect
    }
    ;
    document.addEventListener('DOMContentLoaded',setup)
}
)();
