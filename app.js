
const content = document.getElementById("content");

const lessons = [
    {
        title: "تعريف العصر الجاهلي",
        text: `العصر الجاهلي هو الفترة السابقة لظهور الإسلام.

يركز تاريخ الأدب الجاهلي عادة على نحو قرن ونصف قبل البعثة النبوية.

تميز بازدهار الشعر والخطابة، وانتشار النظام القبلي.`
    },
    {
        title: "الحياة الاجتماعية",
        text: `كانت القبيلة الوحدة الاجتماعية الأساسية.

من أبرز القيم والعادات:
• الكرم وإكرام الضيف.
• الشجاعة والفروسية.
• الوفاء بالعهد.
• الاعتزاز بالنسب.
• العصبية القبلية.

اختلفت أحوال الناس وعاداتهم باختلاف القبائل والبيئات.`
    },
    {
        title: "الحياة السياسية",
        text: `لم تكن شبه الجزيرة العربية دولة سياسية موحدة.

كان لكل قبيلة شيخ يتولى شؤونها.

ظهرت أيضًا ممالك عربية، مثل:
• الحيرة.
• الغساسنة.
• كندة.

ومن الحروب المعروفة حرب البسوس وداحس والغبراء.`
    },
    {
        title: "الحياة الدينية",
        text: `عرف العرب معتقدات دينية متنوعة قبل الإسلام.

منها:
• عبادة الأصنام والأوثان.
• اليهودية.
• المسيحية.

وكان بعض العرب يرفضون عبادة الأصنام ويبحثون عن التوحيد.`
    },
    {
        title: "الشعر الجاهلي",
        text: `يعد الشعر من أهم الفنون الأدبية في العصر الجاهلي.

من أبرز أغراضه:
• الفخر والحماسة.
• المدح والهجاء.
• الرثاء.
• الغزل.
• الوصف.
• الحكمة.

تميز بجزالة الألفاظ وقوة التصوير.`
    },
    {
        title: "المعلقات",
        text: `المعلقات قصائد طويلة مشهورة من أجود الشعر الجاهلي.

اشتهرت المعلقات السبع، وأضاف بعض العلماء ثلاث قصائد أخرى.

من أصحابها:
• امرؤ القيس.
• طرفة بن العبد.
• زهير بن أبي سلمى.
• عنترة بن شداد.
• لبيد بن ربيعة.
• عمرو بن كلثوم.
• الحارث بن حلزة.

أما قصة تعليقها على الكعبة فهي رواية مختلف فيها.`
    }
];

const poets = [
    ["امرؤ القيس", "اشتهر بالوصف والغزل، ولقب بالملك الضليل."],
    ["عنترة بن شداد", "شاعر وفارس من بني عبس، اشتهر بالشجاعة والفروسية."],
    ["زهير بن أبي سلمى", "اشتهر بالحكمة والدعوة إلى الصلح."],
    ["طرفة بن العبد", "من أصحاب المعلقات، وعرف بقوة التعبير."],
    ["لبيد بن ربيعة", "من أصحاب المعلقات، وقد أدرك الإسلام."],
    ["عمرو بن كلثوم", "اشتهر بالفخر والاعتزاز بقبيلته تغلب."]
];

const questions = [
    {
        q: "متى كان العصر الجاهلي؟",
        options: [
            "قبل ظهور الإسلام",
            "بعد العصر العباسي",
            "في العصر الحديث",
            "بعد سقوط الأندلس"
        ],
        answer: 0
    },
    {
        q: "ما الوحدة الاجتماعية الأساسية في المجتمع الجاهلي؟",
        options: ["المدرسة", "القبيلة", "المصنع", "الجامعة"],
        answer: 1
    },
    {
        q: "من الشاعر المعروف بالفروسية والشجاعة؟",
        options: [
            "أبو تمام",
            "المتنبي",
            "عنترة بن شداد",
            "أحمد شوقي"
        ],
        answer: 2
    },
    {
        q: "ما المعلقات؟",
        options: [
            "معارك تاريخية",
            "كتب علمية",
            "مدن عربية",
            "قصائد شعرية مشهورة"
        ],
        answer: 3
    },
    {
        q: "من أشهر شعراء الحكمة في العصر الجاهلي؟",
        options: [
            "زهير بن أبي سلمى",
            "أبو نواس",
            "محمود درويش",
            "نزار قباني"
        ],
        answer: 0
    },
    {
        q: "أي مما يلي من أغراض الشعر الجاهلي؟",
        options: ["البرمجة", "الفخر", "الصحافة", "الرواية"],
        answer: 1
    },
    {
        q: "ما النظام السياسي المنتشر بين قبائل العرب؟",
        options: [
            "النظام الجمهوري الحديث",
            "النظام البرلماني",
            "النظام القبلي",
            "النظام الفيدرالي"
        ],
        answer: 2
    },
    {
        q: "من أصحاب المعلقات؟",
        options: [
            "أحمد شوقي",
            "البحتري",
            "أبو العلاء المعري",
            "طرفة بن العبد"
        ],
        answer: 3
    }
];

// إنشاء بطاقة
function card(title, text, buttonText, action) {
    const div = document.createElement("section");
    div.className = "card";

    const h = document.createElement("h3");
    h.textContent = title;
    div.appendChild(h);

    const p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);

    if (buttonText && action) {
        const btn = document.createElement("button");
        btn.textContent = buttonText;
        btn.onclick = action;
        div.appendChild(btn);
    }

    content.appendChild(div);
}

function heading(text) {
    content.innerHTML = "";
    const h = document.createElement("h2");
    h.textContent = text;
    content.appendChild(h);
}

// الرئيسية
function home() {
    heading("مرحبًا بك في العصر الجاهلي");

    card(
        "رحلة عبر التاريخ",
        "اكتشف حياة العرب قبل الإسلام وتعرف على ثقافتهم وأدبهم."
    );

    card(
        "المكتبة التعليمية",
        "اقرأ الدروس وتعرف على خصائص العصر الجاهلي.",
        "استكشف الدروس",
        showLessons
    );

    card(
        "شعراء الجاهلية",
        "تعرف على أبرز الشعراء الذين تركوا أثرًا في الأدب العربي.",
        "عرض الشعراء",
        showPoets
    );

    card(
        "تحدي المعلومات",
        "اختبر معلوماتك من خلال ثمانية أسئلة تفاعلية.",
        "ابدأ الاختبار",
        startQuiz
    );
}

// الدروس
function showLessons() {
    heading("المكتبة التعليمية");

    lessons.forEach((lesson, index) => {
        card(
            lesson.title,
            lesson.text.split("\n")[0],
            "قراءة الدرس",
            () => openLesson(index)
        );
    });
}

function openLesson(index) {
    const lesson = lessons[index];

    heading(lesson.title);

    card(lesson.title, lesson.text);

    const btn = document.createElement("button");
    btn.textContent = "العودة إلى الدروس";
    btn.onclick = showLessons;
    content.appendChild(btn);
}

// الشعراء
function showPoets() {
    heading("أشهر شعراء العصر الجاهلي");

    poets.forEach(poet => {
        card(poet[0], poet[1]);
    });
}

// الاختبار
let quiz = [];
let current = 0;
let score = 0;
let answered = false;

function startQuiz() {
    quiz = [...questions].sort(() => Math.random() - 0.5);
    current = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    if (current >= quiz.length) {
        showResult();
        return;
    }

    answered = false;
    const question = quiz[current];

    heading(`السؤال ${current + 1} من ${quiz.length}`);

    card("السؤال", question.q);

    const feedback = document.createElement("p");
    feedback.id = "feedback";

    question.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = option;

        btn.onclick = () => {
            if (answered) return;

            answered = true;

            const buttons = content.querySelectorAll(".option");

            buttons.forEach((button, i) => {
                button.disabled = true;

                if (i === question.answer) {
                    button.classList.add("correct");
                }

                if (i === index && i !== question.answer) {
                    button.classList.add("wrong");
                }
            });

            if (index === question.answer) {
                score++;
                feedback.textContent = "إجابة صحيحة! أحسنت.";
                feedback.style.color = "#54d68a";
            } else {
                feedback.textContent =
                    "الإجابة الصحيحة: " +
                    question.options[question.answer];

                feedback.style.color = "#ff7777";
            }

            next.hidden = false;
        };

        content.appendChild(btn);
    });

    content.appendChild(feedback);

    const next = document.createElement("button");
    next.textContent =
        current === quiz.length - 1
        ? "عرض النتيجة"
        : "السؤال التالي";

    next.hidden = true;

    next.onclick = () => {
        current++;
        showQuestion();
    };

    content.appendChild(next);
}

// النتيجة
function showResult() {
    heading("نتيجة الاختبار");

    const percentage = Math.round(score / quiz.length * 100);

    let message = "";

    if (percentage >= 80) {
        message = "ممتاز! لديك معرفة قوية بالعصر الجاهلي.";
    } else if (percentage >= 50) {
        message = "جيد! واصل التعلم لتحسين نتيجتك.";
    } else {
        message = "راجع الدروس وحاول مجددًا.";
    }

    card(
        `النتيجة: ${score} / ${quiz.length}`,
        `النسبة: ${percentage}%\n${message}`,
        "إعادة الاختبار",
        startQuiz
    );

    const btn = document.createElement("button");
    btn.textContent = "العودة للرئيسية";
    btn.onclick = home;
    content.appendChild(btn);
}

// تثبيت التطبيق
let deferredPrompt = null;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;

    deferredPrompt = null;
    installBtn.hidden = true;
});

window.addEventListener("appinstalled", () => {
    installBtn.hidden = true;
});

// تسجيل Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .catch(error => console.error(error));
    });
}

// تشغيل الرئيسية
home();
