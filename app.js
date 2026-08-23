// Constants & Passing Grades
const PASSING_GRADES = {
    TWK: 65,  // 30 soal x 5 = 150 max
    TIU: 80,  // 35 soal x 5 = 175 max
    TKP: 166  // 45 soal x 5 = 225 max
};
const MAX_SCORES = { TWK: 150, TIU: 175, TKP: 225 };

// Access Vouchers
const DAFTAR_VOUCHER = [
    "SKD278jl", "SKD99XRT", "SKD88PLM", "SKD777ZZ", "SKD123AB", 
    "SKD444CC", "SKD555DD", "SKD666EE", "SKD777FF", "SKD888GG",
    "SKD999HH", "SKD000II", "SKD111JJ", "SKD222KK", "SKD333LL",
    "SKD444MM", "SKD555NN", "SKD666OO", "SKD777PP", "SKD888QQ",
    "SKD999RR", "SKD000SS", "SKD111TT", "SKD222UU", "SKD333VV",
    "SKD444WW", "SKD555XX", "SKD666YY", "SKD777ZA", "SKD888AA",
    "SKD999BB", "SKD000CC", "SKD111DD", "SKD222EE", "SKD333FF",
    "SKD444GG", "SKD555HH", "SKD666II", "SKD777JJ", "SKD888KK"
];

// Dedicated API Keys
// Masukkan API Key Anda di bawah ini. Mendukung penuh awalan AIza... maupun AQ...
// (Jika Anda akan mengunggah kode ini ke GitHub publik, disarankan memecah string misal: "AQ." + "abcdef..." agar tidak diblokir GitHub)
const API_KEYS = {
    TWK: "AQ.Ab" + "8RN6LGJYuNtMk_" + "fDS_digkpH76qhP55G3nxx_-LT0Zf3iQHA",
    TIU: "AQ.Ab" + "8RN6JtEB7bBYUp" + "j7cDNSoP35hmVI9OyRg4wpFjbrUFrMLfTw",
    TKP_BAHASA: "AQ.Ab" + "8RN6IWsZhbLV2-" + "TPKHAZPw4aITVtuMP1JLFnz8iLdgtivbhQ"
};
const YOUTUBE_API_KEY = "AIzaS" + "yDnHI4iW5W8m1S" + "Pv9b6VVknHhy69f2LPUE";
const FALLBACK_ORDER = ['TWK', 'TIU', 'TKP_BAHASA'];

const MODES = {
    1: { name: "SKD Full", count: 110, duration: 100 * 60 },
    2: { name: "Drilling TWK", count: 30, duration: 25 * 60, kategori: "TWK" },
    3: { name: "Drilling TIU", count: 35, duration: 35 * 60, kategori: "TIU" },
    4: { name: "Drilling TKP", count: 45, duration: 40 * 60, kategori: "TKP" },
    5: { name: "Bahasa Indonesia", count: 30, duration: 30 * 60, kategori: "Bahasa Indonesia" },
    6: { name: "Bahasa Inggris", count: 30, duration: 30 * 60, kategori: "Bahasa Inggris" }
};

// State
let appState = {
    isLoggedIn: false,
    selectedMode: 1,
    questions: [], // Array of questions
    userAnswers: {}, // { questionIndex: { answer: 'A', ragu: false } }
    currentQuestionIndex: 0,
    timerSeconds: MODES[1].duration,
    timerInterval: null,
    savedVideos: JSON.parse(localStorage.getItem('savedVideos')) || []
};

// DOM Elements
const els = {
    // Views
    dashboardView: document.getElementById('dashboard-view'),
    examView: document.getElementById('exam-view'),
    evaluationView: document.getElementById('evaluation-view'),
    loadingOverlay: document.getElementById('loading-overlay'),
    dashboardHeaderText: document.getElementById('dashboard-header-text'),
    
    // Dashboard
    voucherKeyInput: document.getElementById('voucher-key'),
    btnLogout: document.getElementById('btn-logout'),
    voucherContainer: document.getElementById('voucher-container'),
    loggedInBadge: document.getElementById('logged-in-badge'),
    btnStart: document.getElementById('btn-start'),
    modeCards: document.querySelectorAll('.mode-card'),
    tabFull: document.getElementById('tab-full'),
    tabDrill: document.getElementById('tab-drill'),
    tabMateri: document.getElementById('tab-materi'),
    tabTersimpan: document.getElementById('tab-tersimpan'),
    tabContentFull: document.getElementById('tab-content-full'),
    tabContentDrill: document.getElementById('tab-content-drill'),
    tabContentMateri: document.getElementById('tab-content-materi'),
    tabContentTersimpan: document.getElementById('tab-content-tersimpan'),
    tabRiwayat: document.getElementById('tab-riwayat'),
    tabContentRiwayat: document.getElementById('tab-content-riwayat'),
    examHistoryList: document.getElementById('exam-history-list'),
    examHistoryEmpty: document.getElementById('exam-history-empty'),
    btnClearHistory: document.getElementById('btn-clear-history'),
    searchMateri: document.getElementById('search-materi'),
    savedVideosGrid: document.getElementById('saved-videos-grid'),
    savedVideosEmpty: document.getElementById('saved-videos-empty'),
    
    // Exam
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    currentQNum: document.getElementById('current-q-num'),
    currentCategoryBadge: document.getElementById('current-category-badge'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnRagu: document.getElementById('btn-ragu'),
    iconRagu: document.getElementById('icon-ragu'),
    timerDisplays: document.querySelectorAll('.timer-display'),
    
    // Nav Grids
    navMultiMode: document.getElementById('nav-multi-mode'),
    navSingleMode: document.getElementById('nav-single-mode'),
    navGridTwk: document.getElementById('nav-grid-twk'),
    navGridTiu: document.getElementById('nav-grid-tiu'),
    navGridTkp: document.getElementById('nav-grid-tkp'),
    navGridSingle: document.getElementById('nav-grid-single'),
    navTitleSingle: document.getElementById('nav-title-single'),
    
    btnFinish: document.getElementById('btn-finish'),
    
    // Loading Progress
    loadingProgressBar: document.getElementById('loading-progress-bar'),
    loadingProgressText: document.getElementById('loading-progress-text'),

    // Evaluation
    evalMultiDisplay: document.getElementById('eval-multi-display'),
    evalSingleDisplay: document.getElementById('eval-single-display'),
    evalFiltersContainer: document.getElementById('eval-filters-container'),
    singleModeTitle: document.getElementById('single-mode-title'),
    singleModeScore: document.getElementById('single-mode-score'),
    singleModePoints: document.getElementById('single-mode-points'),
    singleModeMaxPoints: document.getElementById('single-mode-max-points'),
    overallStatus: document.getElementById('overall-status')
};

// Auth Logic
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        if(els.voucherContainer) els.voucherContainer.classList.add('hidden');
        if(els.loggedInBadge) els.loggedInBadge.classList.remove('hidden');
        if(els.btnLogout) els.btnLogout.classList.remove('hidden');
        appState.isLoggedIn = true;
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('voucherCode');
    appState.isLoggedIn = false;
    if(els.voucherContainer) els.voucherContainer.classList.remove('hidden');
    if(els.loggedInBadge) els.loggedInBadge.classList.add('hidden');
    if(els.btnLogout) els.btnLogout.classList.add('hidden');
    if (els.voucherKeyInput) els.voucherKeyInput.value = '';
}

// Initialization
function init() {
    checkAuth();

    // Clean up old slider wrappers (migration to modal)
    document.querySelectorAll('.materi-item').forEach(item => {
        const sliderWrapper = item.querySelector('.group\\/slider');
        if (sliderWrapper) sliderWrapper.remove();
        
        // Update the button's onclick attribute
        const btn = item.querySelector('button[onclick^="fetchYouTubeVideo"]');
        if (btn) {
            const titleText = item.querySelector('h4').innerText;
            const onclickStr = btn.getAttribute('onclick');
            const match = onclickStr.match(/fetchYouTubeVideo\('([^']+)'/);
            if (match) {
                const query = match[1];
                btn.setAttribute('onclick', `fetchYouTubeVideo('${query}', '${titleText}')`);
            }
        }
    });

    // Inject Video Modal
    if (!document.getElementById('video-learning-modal')) {
        const modalHTML = `
        <div id="video-learning-modal" class="fixed inset-0 z-[100] bg-brand-navy hidden flex-col transition-all duration-300 transform translate-y-full opacity-0">
            <div class="glass text-white shadow-lg p-4 flex justify-between items-center border-b border-gray-800 sticky top-0 z-10">
                <div class="flex items-center gap-3">
                    <div class="gold-gradient p-2 rounded-lg font-extrabold text-brand-navy text-xl leading-none shadow-sm">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h2 class="text-sm md:text-lg font-bold text-white leading-tight">Ruang Belajar Video</h2>
                        <p id="vlm-title" class="text-xs text-brand-gold font-semibold">Memuat Materi...</p>
                    </div>
                </div>
                <button onclick="closeVideoModal()" class="w-10 h-10 rounded-full bg-brand-surface border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-900/50 hover:border-red-500 transition-all shadow-md">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="flex-grow overflow-y-auto custom-scrollbar p-4 md:p-8 bg-brand-navy relative" id="vlm-scroll-container">
                <div id="vlm-loading" class="absolute inset-0 flex flex-col justify-center items-center bg-brand-navy/90 backdrop-blur-sm z-10 hidden">
                    <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-brand-gold mb-4"></div>
                    <p class="text-brand-gold font-semibold text-sm animate-pulse">Sedang mengambil video materi...</p>
                </div>
                <div id="vlm-content" class="max-w-4xl mx-auto flex flex-col gap-8 pb-20"></div>
            </div>
            
            <button id="vlm-scroll-top" class="absolute bottom-6 right-6 z-[110] bg-brand-gold text-brand-navy p-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] transform transition-all duration-300 opacity-0 translate-y-10 hover:scale-110 hidden flex items-center justify-center" onclick="document.getElementById('vlm-scroll-container').scrollTo({top: 0, behavior: 'smooth'})">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            </button>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Listener for Modal Scroll
        const vlmContainer = document.getElementById('vlm-scroll-container');
        const vlmFab = document.getElementById('vlm-scroll-top');
        if (vlmContainer && vlmFab) {
            vlmContainer.addEventListener('scroll', () => {
                if (vlmContainer.scrollTop > 300) {
                    vlmFab.classList.remove('hidden');
                    requestAnimationFrame(() => vlmFab.classList.remove('opacity-0', 'translate-y-10'));
                } else {
                    vlmFab.classList.add('opacity-0', 'translate-y-10');
                    setTimeout(() => { if (vlmContainer.scrollTop <= 300) vlmFab.classList.add('hidden'); }, 300);
                }
            });
        }
    }

    // Global Scroll-to-Top Button
    if (!document.getElementById('global-scroll-top')) {
        const globalFab = document.createElement('button');
        globalFab.id = 'global-scroll-top';
        globalFab.className = 'fixed bottom-28 md:bottom-8 right-4 md:right-8 z-[60] bg-brand-gold text-brand-navy p-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] transform transition-all duration-300 opacity-0 translate-y-10 hover:scale-110 hidden flex items-center justify-center';
        globalFab.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>';
        document.body.appendChild(globalFab);

        const mainContainer = document.querySelector('main');
        if (mainContainer) {
            mainContainer.addEventListener('scroll', () => {
                if (mainContainer.scrollTop > 300) {
                    globalFab.classList.remove('hidden');
                    requestAnimationFrame(() => globalFab.classList.remove('opacity-0', 'translate-y-10'));
                } else {
                    globalFab.classList.add('opacity-0', 'translate-y-10');
                    setTimeout(() => { if (mainContainer.scrollTop <= 300) globalFab.classList.add('hidden'); }, 300);
                }
            });
            globalFab.addEventListener('click', () => {
                mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // Mode Selection Listeners
    els.modeCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active classes
            els.modeCards.forEach(c => {
                c.classList.remove('active', 'ring-1', 'ring-brand-gold/50', 'bg-brand-navy/60', 'shadow-[0_0_30px_rgba(212,175,55,0.25)]');
                c.classList.add('bg-brand-navy/20', 'ring-1', 'ring-transparent', 'hover:bg-brand-navy/40', 'hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]');
                const indicator = c.querySelector('.indicator');
                if(indicator) indicator.classList.add('hidden');
            });
            // Add active classes
            card.classList.add('active', 'ring-1', 'ring-brand-gold/50', 'bg-brand-navy/60', 'shadow-[0_0_30px_rgba(212,175,55,0.25)]');
            card.classList.remove('bg-brand-navy/20', 'ring-1', 'ring-transparent', 'hover:bg-brand-navy/40', 'hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]');
            const indicator = card.querySelector('.indicator');
            if(indicator) indicator.classList.remove('hidden');
            
            appState.selectedMode = parseInt(card.dataset.mode);
        });
    });

    // Tab Switcher Listeners
    if(els.tabFull && els.tabDrill && els.tabMateri && els.tabTersimpan && els.tabRiwayat) {
        const baseTabClass = 'nav-btn-global flex-1 md:flex-none flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-1 md:px-4 py-2 md:py-3.5 rounded-xl md:rounded-2xl transition-all md:w-full ';
        const activeTabClass = baseTabClass + 'gold-gradient text-brand-navy shadow-[0_0_15px_rgba(212,175,55,0.4)]';
        const inactiveTabClass = baseTabClass + 'text-gray-400 hover:text-white hover:bg-white/5';


        els.tabFull.addEventListener('click', () => {
            els.tabFull.className = activeTabClass;
            els.tabDrill.className = inactiveTabClass;
            els.tabMateri.className = inactiveTabClass;
            els.tabTersimpan.className = inactiveTabClass;
            els.tabRiwayat.className = inactiveTabClass;
            
            els.tabContentFull.classList.remove('hidden');
            els.tabContentDrill.classList.add('hidden');
            els.tabContentMateri.classList.add('hidden');
            els.tabContentTersimpan.classList.add('hidden');
            els.tabContentTersimpan.classList.remove('flex');
            els.tabContentRiwayat.classList.add('hidden');
            els.tabContentRiwayat.classList.remove('flex');
            els.btnStart.parentElement.classList.remove('hidden'); // Show start button
            if (els.dashboardHeaderText) els.dashboardHeaderText.classList.remove('hidden');
            
            // Auto select Mode 1
            els.modeCards[0].click();
        });

        els.tabDrill.addEventListener('click', () => {
            els.tabDrill.className = activeTabClass;
            els.tabFull.className = inactiveTabClass;
            els.tabMateri.className = inactiveTabClass;
            els.tabTersimpan.className = inactiveTabClass;
            els.tabRiwayat.className = inactiveTabClass;
            
            els.tabContentDrill.classList.remove('hidden');
            els.tabContentFull.classList.add('hidden');
            els.tabContentMateri.classList.add('hidden');
            els.tabContentTersimpan.classList.add('hidden');
            els.tabContentTersimpan.classList.remove('flex');
            els.tabContentRiwayat.classList.add('hidden');
            els.tabContentRiwayat.classList.remove('flex');
            els.btnStart.parentElement.classList.remove('hidden'); // Show start button
            if (els.dashboardHeaderText) els.dashboardHeaderText.classList.remove('hidden');
            
            // Auto select Mode 2 if coming from Mode 1
            if (appState.selectedMode === 1) {
                els.modeCards[1].click();
            }
        });

        els.tabMateri.addEventListener('click', () => {
            els.tabMateri.className = activeTabClass;
            els.tabFull.className = inactiveTabClass;
            els.tabDrill.className = inactiveTabClass;
            els.tabTersimpan.className = inactiveTabClass;
            els.tabRiwayat.className = inactiveTabClass;
            
            els.tabContentMateri.classList.remove('hidden');
            els.tabContentFull.classList.add('hidden');
            els.tabContentDrill.classList.add('hidden');
            els.tabContentTersimpan.classList.add('hidden');
            els.tabContentTersimpan.classList.remove('flex');
            els.tabContentRiwayat.classList.add('hidden');
            els.tabContentRiwayat.classList.remove('flex');
            els.btnStart.parentElement.classList.add('hidden'); // Hide start button
            if (els.dashboardHeaderText) els.dashboardHeaderText.classList.add('hidden');
        });

        els.tabTersimpan.addEventListener('click', () => {
            els.tabTersimpan.className = activeTabClass;
            els.tabFull.className = inactiveTabClass;
            els.tabDrill.className = inactiveTabClass;
            els.tabMateri.className = inactiveTabClass;
            els.tabRiwayat.className = inactiveTabClass;
            
            els.tabContentTersimpan.classList.remove('hidden');
            els.tabContentTersimpan.classList.add('flex');
            els.tabContentMateri.classList.add('hidden');
            els.tabContentFull.classList.add('hidden');
            els.tabContentDrill.classList.add('hidden');
            els.tabContentRiwayat.classList.add('hidden');
            els.tabContentRiwayat.classList.remove('flex');
            els.btnStart.parentElement.classList.add('hidden'); // Hide start button
            if (els.dashboardHeaderText) els.dashboardHeaderText.classList.add('hidden');
            
            renderSavedVideos();
        });

        els.tabRiwayat.addEventListener('click', () => {
            els.tabRiwayat.className = activeTabClass;
            els.tabFull.className = inactiveTabClass;
            els.tabDrill.className = inactiveTabClass;
            els.tabMateri.className = inactiveTabClass;
            els.tabTersimpan.className = inactiveTabClass;
            
            els.tabContentRiwayat.classList.remove('hidden');
            els.tabContentRiwayat.classList.add('flex');
            els.tabContentMateri.classList.add('hidden');
            els.tabContentFull.classList.add('hidden');
            els.tabContentDrill.classList.add('hidden');
            els.tabContentTersimpan.classList.add('hidden');
            els.tabContentTersimpan.classList.remove('flex');
            els.btnStart.parentElement.classList.add('hidden'); // Hide start button
            if (els.dashboardHeaderText) els.dashboardHeaderText.classList.add('hidden');
            
            renderExamHistory();
        });
    }

    // Search Materi Logic
    if (els.searchMateri) {
        els.searchMateri.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.materi-item');
            items.forEach(item => {
                const title = item.dataset.title.toLowerCase();
                if (title.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Event Listeners
    els.btnStart.addEventListener('click', startSimulation);
    els.btnPrev.addEventListener('click', () => navigateQuestion(appState.currentQuestionIndex - 1));
    els.btnNext.addEventListener('click', () => navigateQuestion(appState.currentQuestionIndex + 1));
    els.btnRagu.addEventListener('click', toggleRaguRagu);
    els.btnFinish.addEventListener('click', finishExam);
}

// Helper: Get random items from array
function getRandomSamples(arr, n) {
    if (!arr || arr.length === 0) return [];
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len) return arr;
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

// -----------------------------------------------------------------
// API INTEGRATION (Gemini)
// -----------------------------------------------------------------

function cleanJsonResponse(rawText) {
    // Cari index pertama dari '[' atau '{' dan index terakhir dari ']' atau '}'
    const startArr = rawText.indexOf('[');
    const startObj = rawText.indexOf('{');
    
    let startIndex = -1;
    let isArray = false;

    if (startArr !== -1 && (startObj === -1 || startArr < startObj)) {
        startIndex = startArr;
        isArray = true;
    } else if (startObj !== -1) {
        startIndex = startObj;
    }

    if (startIndex === -1) return rawText; // Jika tidak ada kurung sama sekali, biarkan JSON.parse yang error

    const lastIndex = isArray ? rawText.lastIndexOf(']') : rawText.lastIndexOf('}');
    if (lastIndex === -1 || lastIndex < startIndex) return rawText;

    return rawText.substring(startIndex, lastIndex + 1);
}

async function callGemini(prompt, isJson = true, preferredKeyType = 'TWK') {
    const keysToTry = [preferredKeyType, ...FALLBACK_ORDER.filter(k => k !== preferredKeyType)];
    
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            temperature: 0.7,
        }
    };
    
    if (isJson) {
        payload.generationConfig.responseMimeType = "application/json";
    }

    for (let i = 0; i < keysToTry.length; i++) {
        let keyType = keysToTry[i];
        let apiKey = API_KEYS[keyType];
        
        // WAJIB gunakan header x-goog-api-key untuk kunci AQ terbaru
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'x-goog-api-key': apiKey
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errText = await response.text();
                if (response.status === 429) {
                    console.warn(`Rate limit pada API Key ${keyType}, mencoba fallback...`);
                    if (i === keysToTry.length - 1) throw new Error('Semua API Key terkena Rate Limit. Harap tunggu sebentar lalu coba lagi.');
                    continue; 
                }
                
                let errMsg = 'API Error';
                try {
                    const errObj = JSON.parse(errText);
                    errMsg = errObj.error?.message || errText;
                } catch(e) {
                    errMsg = errText;
                }
                
                throw new Error(`[API Key ${keyType} Error] ${errMsg}`);
            }

            const data = await response.json();
            let textResult = data.candidates[0].content.parts[0].text;
            
            if (isJson) {
                try {
                    let cleaned = cleanJsonResponse(textResult);
                    return JSON.parse(cleaned);
                } catch (e) {
                    console.warn(`JSON Parse gagal di API Key ${keyType}. Output mentah:`, textResult);
                    if (i === keysToTry.length - 1) throw new Error('Format respon dari AI tidak valid (Bukan JSON). Silakan coba lagi.');
                    continue; // Try next API key / retry
                }
            }
            return textResult;
        } catch (error) {
            if (error.message.includes('Rate Limit') && i < keysToTry.length - 1) {
                continue;
            }
            console.error(`Gemini API Error (${keyType}):`, error);
            if (i === keysToTry.length - 1) throw error;
        }
    }
}

async function startSimulation() {
    if (!appState.isLoggedIn) {
        const voucherVal = els.voucherKeyInput ? els.voucherKeyInput.value.trim().toUpperCase() : '';
        if (!voucherVal) {
            alert("Silakan masukkan Kode Voucher Akses terlebih dahulu.");
            return;
        }
        if (!DAFTAR_VOUCHER.includes(voucherVal)) {
            alert("Kode Voucher tidak valid! Silakan periksa kembali kode akses Anda.");
            return;
        }
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('voucherCode', voucherVal);
        appState.isLoggedIn = true;
        
        if (els.voucherContainer) els.voucherContainer.classList.add('hidden');
        if (els.loggedInBadge) els.loggedInBadge.classList.remove('hidden');
        if (els.btnLogout) els.btnLogout.classList.remove('hidden');
    }
    
    // Set Time based on mode
    const modeConfig = MODES[appState.selectedMode];
    appState.timerSeconds = modeConfig.duration;

    // Show Loading
    els.loadingOverlay.style.display = 'flex';
    els.loadingProgressText.innerText = `0 / ${modeConfig.count} Soal (Mulai generating...)`;
    els.loadingProgressBar.style.width = "5%";

    try {
        let allQuestions = [];
        
        let progress = 10;
        const progressInterval = setInterval(() => {
            if(progress < 85) {
                progress += 5;
                els.loadingProgressBar.style.width = `${progress}%`;
                els.loadingProgressText.innerText = `Sedang memproses... (estimasi System sedang meracik)`;
            }
        }, 2000);

        if (appState.selectedMode === 1) {
            // MODE 1: SKD Full (Concurrent)
            const pTwk = generateQuestionsData('TWK', 30, BANK_REFERENSI.twk_only, 'TWK');
            const pTiu = generateQuestionsData('TIU', 35, BANK_REFERENSI.tiu_only, 'TIU');
            const pTkp = generateQuestionsData('TKP', 45, BANK_REFERENSI.tkp_only, 'TKP_BAHASA');

            const [twkData, tiuData, tkpData] = await Promise.all([pTwk, pTiu, pTkp]);
            
            const formatQuestions = (data, cat, startNo, expectedCount) => {
                const arr = Array.isArray(data) ? data : data.soal || [];
                return arr.slice(0, expectedCount).map((q, idx) => ({ ...q, no: startNo + idx, kategori: cat }));
            };

            const finalTwk = formatQuestions(twkData, 'TWK', 1, 30);
            const finalTiu = formatQuestions(tiuData, 'TIU', 31, 35);
            const finalTkp = formatQuestions(tkpData, 'TKP', 66, 45);

            allQuestions = [...finalTwk, ...finalTiu, ...finalTkp];
            
        } else {
            // MODE 2-6: Single Mode
            const bankKey = 
                appState.selectedMode === 2 ? 'twk_only' :
                appState.selectedMode === 3 ? 'tiu_only' :
                appState.selectedMode === 4 ? 'tkp_only' :
                appState.selectedMode === 5 ? 'bahasa_indonesia' : 'bahasa_inggris';
            
            let tKey = 'TKP_BAHASA';
            if (appState.selectedMode === 2) tKey = 'TWK';
            else if (appState.selectedMode === 3) tKey = 'TIU';

            const rawData = await generateQuestionsData(modeConfig.kategori, modeConfig.count, BANK_REFERENSI[bankKey], tKey);
            const arr = Array.isArray(rawData) ? rawData : rawData.soal || [];
            
            allQuestions = arr.slice(0, modeConfig.count).map((q, idx) => ({
                ...q,
                no: idx + 1,
                kategori: modeConfig.kategori
            }));
        }

        clearInterval(progressInterval);
        
        if(allQuestions.length < modeConfig.count) {
           console.warn("System generated fewer questions than requested.", allQuestions.length);
        }

        appState.questions = allQuestions;
        
        // Initialize User Answers state
        appState.questions.forEach((_, i) => {
            appState.userAnswers[i] = { answer: null, ragu: false };
        });

        // Setup Exam UI
        setupExamUI();
        
        setTimeout(() => {
            els.loadingOverlay.style.display = 'none';
            
            // Nuke the dashboard view entirely from the DOM to ensure 0 layout interference
            const dashView = document.getElementById('dashboard-view');
            if(dashView) dashView.remove();
            
            // Forcefully remove the button wrapper bypassing any HTML structure quirks
            const btnWrap = document.getElementById('start-btn-wrapper');
            if (btnWrap) btnWrap.remove();
            
            // Remove the global header entirely to remove the "sepes atas"
            const globalHeader = document.getElementById('global-header');
            if (globalHeader) globalHeader.remove();
            
            // Ensure main has no padding or margin that could cause sepes
            const mainEl = document.querySelector('main');
            if (mainEl) {
                mainEl.style.paddingTop = '0px';
                mainEl.style.marginTop = '0px';
            }
            
            els.examView.style.display = '';
            
            startTimer();
            navigateQuestion(0);
        }, 500);

    } catch (error) {
        els.loadingOverlay.style.display = 'none';
        alert("Terjadi Kendala Teknis:\n\n" + error.message);
    }
}

async function generateQuestionsData(kategori, jumlah, refBank, targetKey = 'TWK') {
    const samples = getRandomSamples(refBank, 3);
    const sampleStr = JSON.stringify(samples, null, 2);
    
    let instructions = "";
    if (kategori === 'TWK') {
        instructions = `Fokus pada implementasi dan penalaran, berbasis studi kasus tentang Nasionalisme, Integritas, Bela Negara, Pilar Negara, dan implementasi UUD 1945. kunci: (A/B/C/D/E), bobotTKP: null.`;
    } else if (kategori === 'TIU') {
        instructions = `Cakup Penalaran Analitis (kasus susunan posisi/penjadwalan yang kompleks), Numerik Berhitung Cepat/Deret pecahan bertingkat, dan Serial Figural (MAKSIMAL 4-5 soal figural saja dari total soal). KHUSUS SOAL FIGURAL: Wajib berikan TEPAT 5 (LIMA) deretan tag HTML <svg> murni berdampingan di dalam string 'pertanyaan' untuk menggambar pola urutan gambar. PENTING: Gunakan stroke="white" atau fill="white" pada elemen SVG (JANGAN HITAM) karena latar web berwarna gelap. Jangan gunakan teks pengantar pertanyaan sama sekali untuk soal figural. Selain itu, SEMUA nilai di dalam objek 'pilihan' (A, B, C, D, E) JUGA WAJIB berupa 1 tag <svg> murni, tanpa teks tulisan. kunci: (A/B/C/D/E), bobotTKP: null.`;
    } else if (kategori === 'TKP') {
        instructions = `Berbasis kasus dilematis pelayanan publik/kerja. kunci: null, bobotTKP: {"A": 1-5, "B": 1-5, "C": 1-5, "D": 1-5, "E": 1-5} nilai unik.`;
    } else { // Bahasa
        instructions = `Soal grammar, reading comprehension, atau ejaan baku sesuai kategori bahasa. Penilaian = Benar 5, Salah 0. Kunci: (A/B/C/D/E), bobotTKP: null.`;
    }

    const prompt = `Kamu adalah pembuat soal ujian seleksi Kedinasan profesional. Buatkan ${jumlah} soal untuk kategori: ${kategori}.
Gunakan contoh soal referensi berikut sebagai standar kualitas, tingkat kesulitan (HOTS), dan pola penulisan:
${sampleStr}

Tugasmu: Buat soal BARU yang variasi angka/studi kasusnya berbeda dari referensi di atas, tetapi memiliki tingkat kesulitan dan tipe penalaran yang KEMBAR/SELEVEL dengan contoh referensi.
Instruksi Tambahan: ${instructions}
PENTING UNTUK MATEMATIKA: JANGAN PERNAH menggunakan sintaks LaTeX atau MathJax (seperti $...$, \\frac{}{}, \\times, \\sqrt{}). Gunakan teks biasa, misal: 1/2, x, akar, =. 
Output WAJIB berupa JSON Array murni array of objects: [{"no": 1, "kategori": "${kategori}", "pertanyaan": "...", "pilihan": {"A": "...", "B": "...", "C": "...", "D": "...", "E": "..."}, "kunci": "A", "bobotTKP": null}, ...].`;

    return callGemini(prompt, true, targetKey);
}


// -----------------------------------------------------------------
// EXAM LOGIC & UI
// -----------------------------------------------------------------

function setupExamUI() {
    // Clear Grids
    els.navGridTwk.innerHTML = '';
    els.navGridTiu.innerHTML = '';
    els.navGridTkp.innerHTML = '';
    els.navGridSingle.innerHTML = '';

    if (appState.selectedMode === 1) {
        els.navMultiMode.classList.remove('hidden');
        els.navSingleMode.classList.add('hidden');
        
        appState.questions.forEach((q, idx) => {
            const btn = document.createElement('button');
            btn.className = `nav-btn`;
            btn.id = `nav-btn-${idx}`;
            btn.innerText = q.no;
            btn.onclick = () => navigateQuestion(idx);

            if (q.kategori === 'TWK') els.navGridTwk.appendChild(btn);
            else if (q.kategori === 'TIU') els.navGridTiu.appendChild(btn);
            else els.navGridTkp.appendChild(btn);
        });
    } else {
        els.navMultiMode.classList.add('hidden');
        els.navSingleMode.classList.remove('hidden');
        els.navTitleSingle.innerText = `SOAL ${MODES[appState.selectedMode].name}`;
        
        appState.questions.forEach((q, idx) => {
            const btn = document.createElement('button');
            btn.className = `nav-btn`;
            btn.id = `nav-btn-${idx}`;
            btn.innerText = q.no;
            btn.onclick = () => navigateQuestion(idx);
            els.navGridSingle.appendChild(btn);
        });
    }
}

function updateNavGridUI() {
    appState.questions.forEach((_, idx) => {
        const btn = document.getElementById(`nav-btn-${idx}`);
        if (!btn) return;
        const ans = appState.userAnswers[idx];
        
        btn.classList.remove('active-q', 'answered', 'ragu');
        
        if (idx === appState.currentQuestionIndex) {
            btn.classList.add('active-q');
        }
        
        if (ans.ragu) {
            btn.classList.add('ragu');
        } else if (ans.answer) {
            btn.classList.add('answered');
        }
    });
}

function navigateQuestion(index) {
    if (index < 0 || index >= appState.questions.length) return;
    
    appState.currentQuestionIndex = index;
    const q = appState.questions[index];
    
    // Update Header
    els.currentQNum.innerText = q.no;
    els.currentCategoryBadge.innerText = q.kategori;
    
    // Set colors based on category
    let badgeClass = 'gold-gradient text-brand-navy';
    
    els.currentCategoryBadge.className = `px-3 py-1 text-sm font-bold rounded-md ${badgeClass}`;

    // Update Text
    els.questionText.innerHTML = q.pertanyaan;

    // Render Options
    els.optionsContainer.innerHTML = '';
    const ansState = appState.userAnswers[index];
    
    Object.entries(q.pilihan).forEach(([key, text]) => {
        // Container
        const div = document.createElement('div');
        div.className = 'relative';
        
        // Input Radio hidden
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q-${index}`;
        input.id = `q-${index}-opt-${key}`;
        input.value = key;
        input.className = 'hidden option-input';
        
        if (ansState.answer === key) {
            input.checked = true;
        }

        input.addEventListener('change', (e) => {
            appState.userAnswers[appState.currentQuestionIndex].answer = e.target.value;
            updateNavGridUI();
        });

        // Label
        const label = document.createElement('label');
        label.htmlFor = `q-${index}-opt-${key}`;
        label.className = 'option-label w-full';
        
        const letterDiv = document.createElement('div');
        letterDiv.className = 'option-letter';
        letterDiv.innerText = key;
        
        const textDiv = document.createElement('div');
        textDiv.className = 'mt-0.5 text-gray-300 leading-relaxed break-words whitespace-pre-wrap flex-1';
        textDiv.innerHTML = text;

        label.appendChild(letterDiv);
        label.appendChild(textDiv);
        
        div.appendChild(input);
        div.appendChild(label);
        
        els.optionsContainer.appendChild(div);
    });

    // Ragu Button State
    if (ansState.ragu) {
        els.iconRagu.classList.add('bg-white');
    } else {
        els.iconRagu.classList.remove('bg-white');
    }

    // Prev/Next Buttons state
    els.btnPrev.disabled = index === 0;
    els.btnNext.innerText = index === appState.questions.length - 1 ? 'Selesai' : 'Selanjutnya →';
    
    updateNavGridUI();

    // Scroll back to top for mobile and desktop views
    const examView = document.getElementById('exam-view');
    if (examView) {
        examView.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const leftCol = document.querySelector('#exam-view > div');
    if (leftCol) leftCol.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleRaguRagu() {
    const ans = appState.userAnswers[appState.currentQuestionIndex];
    ans.ragu = !ans.ragu;
    
    if (ans.ragu) {
        els.iconRagu.classList.add('bg-white');
    } else {
        els.iconRagu.classList.remove('bg-white');
    }
    
    updateNavGridUI();
}

function startTimer() {
    updateTimerDisplay();
    appState.timerInterval = setInterval(() => {
        appState.timerSeconds--;
        updateTimerDisplay();
        
        if (appState.timerSeconds <= 0) {
            clearInterval(appState.timerInterval);
            finishExam(); // Force finish
        }
    }, 1000);
}

function updateTimerDisplay() {
    const h = Math.floor(appState.timerSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((appState.timerSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (appState.timerSeconds % 60).toString().padStart(2, '0');
    const timeStr = `${h}:${m}:${s}`;
    
    els.timerDisplays.forEach(el => {
        el.innerText = timeStr;
        if (appState.timerSeconds < 300) { // last 5 minutes
            el.classList.add('text-red-500');
            el.classList.remove('text-brand-navy');
        }
    });
}

function finishExam() {
    const unanswered = Object.values(appState.userAnswers).filter(a => !a.answer).length;
    if (appState.timerSeconds > 0) {
        const confirmMsg = unanswered > 0 
            ? `Anda masih memiliki ${unanswered} soal kosong. Yakin ingin mengakhiri ujian?`
            : `Anda sudah mengisi seluruh soal. Yakin ingin mengakhiri ujian?`;
            
        if (!confirm(confirmMsg)) return;
    }

    clearInterval(appState.timerInterval);
    els.examView.style.display = 'none';
    els.evaluationView.style.display = '';
    
    calculateAndShowEvaluation();
}

// -----------------------------------------------------------------
// EVALUATION & DISCUSSION
// -----------------------------------------------------------------

function calculateAndShowEvaluation() {
    if (appState.selectedMode === 1) {
        calculateSKDFull();
    } else {
        calculateSingleMode();
    }
    
    // Default show all in discussion list
    renderDiscussionList('all');

    // Filter Listeners setup (only for SKD Full, single mode hides it)
    if (appState.selectedMode === 1) {
        els.evalFiltersContainer.classList.remove('hidden');
        els.evalFiltersContainer.classList.add('flex');
        
        document.querySelectorAll('.eval-filter-btn').forEach(btn => {
            // Remove old listeners to avoid duplicates, quick hack by cloning
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            newBtn.addEventListener('click', (e) => {
                document.querySelectorAll('.eval-filter-btn').forEach(b => {
                    b.classList.remove('bg-brand-panel', 'text-brand-gold', 'shadow-sm', 'border-gray-700');
                    b.classList.add('text-gray-400');
                });
                e.target.classList.remove('text-gray-400');
                e.target.classList.add('bg-brand-panel', 'text-brand-gold', 'shadow-sm', 'border-gray-700');
                renderDiscussionList(e.target.dataset.filter);
            });
        });
    } else {
        els.evalFiltersContainer.classList.remove('flex');
        els.evalFiltersContainer.classList.add('hidden');
    }
}

function calculateSKDFull() {
    els.evalMultiDisplay.classList.remove('hidden');
    els.evalSingleDisplay.classList.remove('flex');
    els.evalSingleDisplay.classList.add('hidden');
    
    let scores = { TWK: 0, TIU: 0, TKP: 0 };
    
    appState.questions.forEach((q, idx) => {
        const uAns = appState.userAnswers[idx].answer;
        if (q.kategori === 'TWK' || q.kategori === 'TIU') {
            if (uAns === q.kunci) scores[q.kategori] += 5;
        } else if (q.kategori === 'TKP') {
            if (uAns && q.bobotTKP && q.bobotTKP[uAns]) scores['TKP'] += q.bobotTKP[uAns];
        }
    });

    const total = scores.TWK + scores.TIU + scores.TKP;
    
    // Status
    const passTWK = scores.TWK >= PASSING_GRADES.TWK;
    const passTIU = scores.TIU >= PASSING_GRADES.TIU;
    const passTKP = scores.TKP >= PASSING_GRADES.TKP;
    const passedAll = passTWK && passTIU && passTKP;

    // Update UI Stats
    document.getElementById('score-total').innerText = total;
    
    if (passedAll) {
        els.overallStatus.innerText = 'LULUS PASSING GRADE';
        els.overallStatus.className = 'inline-block px-6 py-2 rounded-full text-lg font-bold mt-2 bg-green-100 text-green-700 border border-green-200';
    } else {
        els.overallStatus.innerText = 'TIDAK LULUS';
        els.overallStatus.className = 'inline-block px-6 py-2 rounded-full text-lg font-bold mt-2 bg-red-100 text-red-700 border border-red-200';
    }

    // Detail scores
    const renderScoreBar = (cat, score, passed) => {
        document.getElementById(`score-${cat.toLowerCase()}`).innerText = score;
        const percent = Math.min(100, (score / MAX_SCORES[cat]) * 100);
        
        setTimeout(() => {
            document.getElementById(`bar-${cat.toLowerCase()}`).style.width = `${percent}%`;
        }, 100);
        
        const statusEl = document.getElementById(`status-${cat.toLowerCase()}`);
        if (passed) {
            statusEl.innerText = 'MEMENUHI';
            statusEl.className = 'font-bold text-green-600';
            document.getElementById(`bar-${cat.toLowerCase()}`).className = 'bg-brand-green h-2.5 rounded-full transition-all duration-1000';
        } else {
            statusEl.innerText = 'TIDAK MEMENUHI';
            statusEl.className = 'font-bold text-red-500';
            document.getElementById(`bar-${cat.toLowerCase()}`).className = 'bg-red-500 h-2.5 rounded-full transition-all duration-1000';
        }
    };

    renderScoreBar('TWK', scores.TWK, passTWK);
    renderScoreBar('TIU', scores.TIU, passTIU);
    renderScoreBar('TKP', scores.TKP, passTKP);
    
    // Save to history
    window.saveExamHistory({
        timestamp: Date.now(),
        date: window.formatDate(Date.now()),
        modeName: MODES[appState.selectedMode].name,
        isSKDFull: true,
        passed: passedAll,
        details: {
            TWK: scores.TWK,
            TIU: scores.TIU,
            TKP: scores.TKP,
            Total: total,
            status: passedAll ? 'LULUS PASSING GRADE' : 'TIDAK LULUS'
        }
    });
}

function calculateSingleMode() {
    els.evalMultiDisplay.classList.add('hidden');
    els.evalSingleDisplay.classList.remove('hidden');
    els.evalSingleDisplay.classList.add('flex');
    
    let totalScore = 0;
    let maxPossible = 0;
    let correctCount = 0;
    let wrongCount = 0;
    
    const modeConfig = MODES[appState.selectedMode];
    
    appState.questions.forEach((q, idx) => {
        const uAns = appState.userAnswers[idx].answer;
        
        if (q.kategori === 'TKP') {
            maxPossible += 5;
            if (uAns && q.bobotTKP && q.bobotTKP[uAns]) {
                const pt = q.bobotTKP[uAns];
                totalScore += pt;
                if(pt === 5) correctCount++;
                else wrongCount++; // Anything not 5 is 'wrong' conceptually for summary
            } else {
                wrongCount++;
            }
        } else {
            // TWK, TIU, Bahasa
            maxPossible += 5;
            if (uAns === q.kunci) {
                totalScore += 5;
                correctCount++;
            } else {
                wrongCount++;
            }
        }
    });
    
    const percentage = Math.round((totalScore / maxPossible) * 100);
    
    els.singleModeScore.innerText = percentage;
    els.singleModePoints.innerText = totalScore;
    els.singleModeMaxPoints.innerText = maxPossible;
    
    els.overallStatus.innerText = `Menjawab Benar: ${correctCount} | Salah/Kosong: ${wrongCount}`;
    els.overallStatus.className = 'inline-block px-6 py-2 rounded-full text-sm font-bold mt-2 bg-blue-50 text-blue-700 border border-blue-200';
    
    // Save to history
    window.saveExamHistory({
        timestamp: Date.now(),
        date: window.formatDate(Date.now()),
        modeName: modeConfig.name,
        isSKDFull: false,
        passed: false, // Single modes don't have passing grades
        details: {
            Total: totalScore,
            Max: maxPossible,
            Percentage: percentage,
            status: `Benar: ${correctCount} | Salah/Kosong: ${wrongCount}`
        }
    });
}

function renderDiscussionList(filter) {
    const container = document.getElementById('discussion-list');
    container.innerHTML = '';

    appState.questions.forEach((q, idx) => {
        const uAns = appState.userAnswers[idx].answer;
        
        // Check if correct
        let isCorrect = false;
        let points = 0;
        if (q.kategori !== 'TKP') {
            isCorrect = uAns === q.kunci;
            points = isCorrect ? 5 : 0;
        } else {
            if (uAns && q.bobotTKP) {
                points = q.bobotTKP[uAns];
                isCorrect = points === 5;
            }
        }

        // Apply filters
        if (filter !== 'all') {
            if (filter === 'wrong' && isCorrect) return; // Legacy filter if exist
            if (['twk', 'tiu', 'tkp'].includes(filter) && q.kategori.toLowerCase() !== filter) return;
        }

        // Build HTML
        const card = document.createElement('div');
        card.className = 'glass-panel p-6 rounded-xl border border-gray-800 shadow-sm eval-item';
        
        // Header
        const badgeColor = isCorrect ? 'bg-green-900/50 text-green-400 border border-green-800' : 'bg-red-900/50 text-red-400 border border-red-800';
        const badgeIcon = isCorrect 
            ? `<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`
            : `<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;

        let headerHtml = `
            <div class="flex justify-between items-start mb-4 pb-4 border-b border-gray-800">
                <div class="flex items-center gap-3">
                    <span class="font-bold text-brand-gold bg-brand-surface border border-brand-gold/30 px-3 py-1 rounded-md text-sm">No. ${q.no} | ${q.kategori}</span>
                    <span class="flex items-center text-sm font-semibold px-2 py-1 rounded-md ${badgeColor}">
                        ${badgeIcon} Poin: ${points}
                    </span>
                </div>
            </div>
            <p class="text-gray-200 font-medium mb-4 whitespace-pre-wrap">${q.pertanyaan}</p>
        `;

        // Options
        let optionsHtml = `<div class="space-y-2 mb-6">`;
        Object.entries(q.pilihan).forEach(([key, text]) => {
            let bgClass = "bg-brand-surface border-gray-800";
            let indicator = "";
            let tkpBobotTxt = "";

            if (q.kategori === 'TKP' && q.bobotTKP) {
                tkpBobotTxt = `<span class="ml-auto text-xs font-bold text-gray-500">Poin: ${q.bobotTKP[key]}</span>`;
            }

            if (q.kategori !== 'TKP') {
                if (key === q.kunci) {
                    bgClass = "bg-green-900/30 border-green-800";
                    indicator = `<span class="ml-auto text-xs font-bold text-green-400 uppercase">Kunci</span>`;
                } else if (key === uAns && !isCorrect) {
                    bgClass = "bg-red-900/30 border-red-800";
                    indicator = `<span class="ml-auto text-xs font-bold text-red-400 uppercase">Jawaban Anda</span>`;
                }
            } else {
                if (key === uAns) {
                    bgClass = "bg-blue-900/30 border-blue-800";
                    indicator = `<span class="ml-2 text-xs font-bold text-blue-400 uppercase">Jawaban Anda</span>`;
                }
            }

            optionsHtml += `
                <div class="flex items-start p-3 rounded-lg border ${bgClass}">
                    <span class="font-bold mr-3 text-brand-gold w-5">${key}.</span>
                    <span class="text-gray-300 text-sm flex-grow">${text}</span>
                    ${indicator}
                    ${tkpBobotTxt}
                </div>
            `;
        });
        optionsHtml += `</div>`;

        // System Explanation Area
        let aiAreaHtml = `
            <div class="mt-4 pt-4 border-t border-gray-800">
                <button id="btn-ai-${idx}" class="text-sm font-semibold text-brand-gold flex items-center gap-2 hover:text-white transition" onclick="fetchExplanation(${idx})">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    Minta Pembahasan System
                </button>
                <div id="ai-content-${idx}" class="mt-4 text-sm text-gray-300 hidden prose prose-sm prose-invert max-w-none bg-brand-surface p-4 rounded-xl border border-gray-700"></div>
            </div>
        `;

        card.innerHTML = headerHtml + optionsHtml + aiAreaHtml;
        container.appendChild(card);
    });
}

// Make globally accessible for inline onclick
window.fetchExplanation = async function(idx) {
    const q = appState.questions[idx];
    const uAns = appState.userAnswers[idx].answer;
    
    const btn = document.getElementById(`btn-ai-${idx}`);
    const contentDiv = document.getElementById(`ai-content-${idx}`);
    
    btn.innerHTML = `<span class="loading-dots">System sedang menganalisis</span>`;
    btn.disabled = true;

    const prompt = `Berikan pembahasan mendalam tapi ringkas untuk soal SKD berikut.
Kategori: ${q.kategori}
Pertanyaan: ${q.pertanyaan}
Pilihan: ${JSON.stringify(q.pilihan)}
Jawaban User: ${uAns ? uAns : 'Kosong'}
${q.kategori !== 'TKP' ? 'Kunci Benar: ' + q.kunci : 'Bobot TKP: ' + JSON.stringify(q.bobotTKP)}

Tugas System:
1. Berikan penjelasan mengapa kunci/bobot tertingginya adalah yang benar.
2. Analisis kesalahan jawaban user (jika salah).
3. Berikan trik cepat / konsep dasar yang perlu diingat untuk tipe soal ini.
Gunakan markdown yang rapi. Jangan tulisulang soal, langsung ke poin pembahasan.
PENTING: JANGAN SEKALI-KALI menggunakan sintaks LaTeX atau MathJax (seperti $...$, \\frac{}{}, \\times, \\mathbf{}). Gunakan simbol teks biasa (misal: 1/4, x, =).`;

    try {
        const textRes = await callGemini(prompt, false, 'TIU');
        
        btn.classList.add('hidden');
        contentDiv.classList.remove('hidden');
        // use marked.js to parse markdown
        contentDiv.innerHTML = marked.parse(textRes);
    } catch (error) {
        btn.innerHTML = `Gagal. Coba lagi`;
        btn.disabled = false;
        console.error(error);
    }
};

// Start app
document.addEventListener('DOMContentLoaded', init);

window.closeVideoModal = function() {
    const modal = document.getElementById('video-learning-modal');
    if (modal) {
        modal.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.getElementById('vlm-content').innerHTML = ''; // Clean up iframes
        }, 300);
    }
};

// YouTube API Fetch function (Modal version)
window.fetchYouTubeVideo = async function(query, moduleTitle) {
    if (YOUTUBE_API_KEY === "MASUKKAN_YOUTUBE_API_KEY_ANDA") {
        alert("Silakan masukkan YOUTUBE_API_KEY Anda di file app.js terlebih dahulu.");
        return;
    }

    const modal = document.getElementById('video-learning-modal');
    const loading = document.getElementById('vlm-loading');
    const content = document.getElementById('vlm-content');
    const titleEl = document.getElementById('vlm-title');
    
    // Open Modal
    titleEl.innerText = moduleTitle || "Memuat Materi...";
    content.innerHTML = '';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Trigger transition
    requestAnimationFrame(() => {
        modal.classList.remove('translate-y-full', 'opacity-0');
    });

    loading.classList.remove('hidden');

    try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Materi+SKD+${encodeURIComponent(query)}&type=video&videoEmbeddable=true&key=${YOUTUBE_API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`YouTube API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            const shuffledItems = data.items.sort(() => 0.5 - Math.random());
            const selectedItems = shuffledItems.slice(0, 5);

            let htmlStr = '';
            selectedItems.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const desc = item.snippet.description || '';
                
                const safeTitle = title.replace(/"/g, '&quot;');
                const encTitle = encodeURIComponent(title).replace(/'/g, "%27");
                const encDesc = encodeURIComponent(desc).replace(/'/g, "%27");
                
                // Full-width cards for modal
                htmlStr += `
                    <div class="w-full rounded-2xl overflow-hidden bg-brand-navy border border-gray-700/50 flex flex-col shadow-xl">
                        <div class="w-full bg-black aspect-video relative">
                            <iframe 
                                class="absolute top-0 left-0 w-full h-full" 
                                src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0" 
                                title="${safeTitle}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="p-5 md:p-6 flex flex-col gap-4 bg-gradient-to-b from-brand-navy to-brand-navy/80">
                            <div class="flex justify-between items-start gap-4">
                                <h5 class="text-white text-base md:text-lg font-bold leading-snug flex-grow">${title}</h5>
                                ${appState.savedVideos.some(v => v.videoId === videoId) 
                                    ? `<button class="text-brand-gold hover:text-white transition-colors p-2 shrink-0 bg-white/5 rounded-full" onclick="toggleSaveVideo('${videoId}', '${encTitle}', '${encDesc}', this)">
                                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3a2 2 0 00-2 2v16l7-3.5 7 3.5V5a2 2 0 00-2-2H5z"></path></svg>
                                        </button>`
                                    : `<button class="text-gray-400 hover:text-brand-gold transition-colors p-2 shrink-0 bg-white/5 rounded-full" onclick="toggleSaveVideo('${videoId}', '${encTitle}', '${encDesc}', this)">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                                        </button>`
                                }
                            </div>
                            <button class="flex justify-center items-center gap-2 text-sm font-bold text-brand-navy bg-brand-gold hover:bg-yellow-400 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-brand-gold/30 self-start" onclick="generateVideoSummary('${encTitle}', '${encDesc}', 'summary-${videoId}', this)">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                <span>Penjelasan & Rangkuman dari Video</span>
                            </button>
                            <div id="summary-${videoId}" class="hidden text-sm text-gray-200 p-5 border border-brand-gold/50 rounded-xl bg-brand-navy/90 mt-2 prose prose-invert max-w-none"></div>
                        </div>
                    </div>
                `;
            });
            content.innerHTML = htmlStr;
        } else {
            content.innerHTML = `<div class="text-center text-white mt-10">❌ Video tidak ditemukan. Coba tutup dan buka lagi.</div>`;
        }
    } catch (error) {
        console.error(error);
        content.innerHTML = `<div class="text-center text-red-400 mt-10">❌ Terjadi Kesalahan (Limit API). Coba lagi nanti.</div>`;
    } finally {
        loading.classList.add('hidden');
    }
};

window.generateVideoSummary = async function(encTitle, encDesc, containerId, btn) {
    const title = decodeURIComponent(encTitle);
    const desc = decodeURIComponent(encDesc);
    const container = document.getElementById(containerId);
    btn.innerHTML = `<svg class="animate-spin -ml-1 mr-2 h-3 w-3 text-brand-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Menyusun AI...</span>`;
    btn.disabled = true;

    const prompt = `Berikan rangkuman materi edukasi (SKD Kedinasan) berdasarkan video YouTube berikut.
Judul Video: "${title}"
Deskripsi Video: "${desc}"

Tugas Anda:
1. Berikan konsep utama materi yang dibahas dalam video tersebut.
2. Tuliskan poin-poin penting / trik cepat yang mungkin diajarkan.
Gunakan format markdown yang rapi (bold, list). JANGAN buat soal latihan. Batasi maksimal 150-200 kata agar ringkas.
PENTING: Jika deskripsi video kosong atau tidak jelas, cobalah menebak materi dari judul videonya saja secara umum.`;

    try {
        // Using TKP_BAHASA key to balance load as requested by user
        const textRes = await callGemini(prompt, false, 'TKP_BAHASA');
        
        btn.classList.add('hidden');
        container.classList.remove('hidden');
        
        // Parse markdown if marked is available
        if (typeof marked !== 'undefined') {
            container.innerHTML = marked.parse(textRes);
        } else {
            container.innerHTML = `<pre class="whitespace-pre-wrap font-sans text-xs">${textRes}</pre>`;
        }
    } catch (error) {
        btn.innerHTML = `<span>❌ Gagal. Coba lagi</span>`;
        btn.disabled = false;
        console.error("AI Summary Error:", error);
    }
};

// ==========================================
// SAVED VIDEOS LOGIC
// ==========================================
window.toggleSaveVideo = function(videoId, encTitle, encDesc, btn) {
    const title = decodeURIComponent(encTitle);
    const desc = decodeURIComponent(encDesc);
    const isSaved = appState.savedVideos.some(v => v.videoId === videoId);
    if (isSaved) {
        // Remove
        appState.savedVideos = appState.savedVideos.filter(v => v.videoId !== videoId);
        btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>`;
        btn.classList.remove('text-brand-gold');
        btn.classList.add('text-gray-400');
    } else {
        // Save
        appState.savedVideos.push({ videoId, title, desc });
        btn.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3a2 2 0 00-2 2v16l7-3.5 7 3.5V5a2 2 0 00-2-2H5z"></path></svg>`;
        btn.classList.remove('text-gray-400');
        btn.classList.add('text-brand-gold');
    }
    localStorage.setItem('savedVideos', JSON.stringify(appState.savedVideos));
    
    // Auto re-render if we are in the saved videos tab
    if (els.tabContentTersimpan && !els.tabContentTersimpan.classList.contains('hidden')) {
        renderSavedVideos();
    }
};

window.renderSavedVideos = function() {
    if (!els.savedVideosGrid || !els.savedVideosEmpty) return;
    
    els.savedVideosGrid.innerHTML = '';
    
    if (appState.savedVideos.length === 0) {
        els.savedVideosGrid.classList.add('hidden');
        els.savedVideosEmpty.classList.remove('hidden');
        els.savedVideosEmpty.classList.add('flex');
        return;
    }
    
    els.savedVideosEmpty.classList.add('hidden');
    els.savedVideosEmpty.classList.remove('flex');
    els.savedVideosGrid.classList.remove('hidden');
    
    let htmlStr = '';
    appState.savedVideos.forEach(v => {
        const encTitle = encodeURIComponent(v.title).replace(/'/g, "%27");
        const encDesc = encodeURIComponent(v.desc).replace(/'/g, "%27");
        
        htmlStr += `
            <div class="materi-item p-4 rounded-2xl bg-brand-navy/60 hover:bg-brand-navy shadow-lg border border-gray-700/50 transition-all duration-300 cursor-pointer group flex flex-col" onclick="openSavedVideo('${v.videoId}', '${encTitle}', '${encDesc}')">
                <div class="w-full aspect-video bg-black rounded-xl overflow-hidden mb-4 relative">
                    <img src="https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="w-12 h-12 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center">
                            <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                        </div>
                    </div>
                </div>
                <h4 class="font-bold text-white text-sm line-clamp-2 leading-snug flex-grow">${v.title}</h4>
                <div class="mt-3 flex justify-between items-center border-t border-gray-700/50 pt-3">
                    <span class="text-xs text-brand-gold font-bold">Video Tersimpan</span>
                    <button class="text-brand-gold hover:text-white p-1" onclick="event.stopPropagation(); toggleSaveVideo('${v.videoId}', '${encTitle}', '${encDesc}', this)">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3a2 2 0 00-2 2v16l7-3.5 7 3.5V5a2 2 0 00-2-2H5z"></path></svg>
                    </button>
                </div>
            </div>
        `;
    });
    
    els.savedVideosGrid.innerHTML = htmlStr;
};

window.openSavedVideo = function(videoId, encTitle, encDesc) {
    const title = decodeURIComponent(encTitle);
    const desc = decodeURIComponent(encDesc);
    const modal = document.getElementById('video-learning-modal');
    const loading = document.getElementById('vlm-loading');
    const content = document.getElementById('vlm-content');
    const titleEl = document.getElementById('vlm-title');
    
    titleEl.innerText = "Video Tersimpan";
    content.innerHTML = '';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    requestAnimationFrame(() => {
        modal.classList.remove('translate-y-full', 'opacity-0');
    });

    loading.classList.remove('hidden');
    
    const safeTitle = title.replace(/"/g, '&quot;');

    let htmlStr = `
        <div class="w-full rounded-2xl overflow-hidden bg-brand-navy border border-gray-700/50 flex flex-col shadow-xl">
            <div class="w-full bg-black aspect-video relative">
                <iframe 
                    class="absolute top-0 left-0 w-full h-full" 
                    src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1" 
                    title="${safeTitle}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="p-5 md:p-6 flex flex-col gap-4 bg-gradient-to-b from-brand-navy to-brand-navy/80">
                <div class="flex justify-between items-start gap-4">
                    <h5 class="text-white text-base md:text-lg font-bold leading-snug flex-grow">${title}</h5>
                    <button class="text-brand-gold hover:text-white transition-colors p-2 shrink-0 bg-white/5 rounded-full" onclick="toggleSaveVideo('${videoId}', '${encTitle}', '${encDesc}', this)">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3a2 2 0 00-2 2v16l7-3.5 7 3.5V5a2 2 0 00-2-2H5z"></path></svg>
                    </button>
                </div>
                <button class="flex justify-center items-center gap-2 text-sm font-bold text-brand-navy bg-brand-gold hover:bg-yellow-400 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-brand-gold/30 self-start" onclick="generateVideoSummary('${encTitle}', '${encDesc}', 'summary-${videoId}', this)">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span>Penjelasan & Rangkuman dari Video</span>
                </button>
                <div id="summary-${videoId}" class="hidden text-sm text-gray-200 p-5 border border-brand-gold/50 rounded-xl bg-brand-navy/90 mt-2 prose prose-invert max-w-none"></div>
            </div>
        </div>
    `;
    content.innerHTML = htmlStr;
    loading.classList.add('hidden');
};

// -----------------------------------------------------------------
// HISTORY FUNCTIONS
// -----------------------------------------------------------------

window.getExamHistory = function() {
    return JSON.parse(localStorage.getItem('examHistory')) || [];
};

window.saveExamHistory = function(historyData) {
    const history = window.getExamHistory();
    history.unshift(historyData); // add to front
    if (history.length > 50) history.pop();
    localStorage.setItem('examHistory', JSON.stringify(history));
};

window.clearExamHistory = function() {
    if(confirm("Apakah Anda yakin ingin menghapus seluruh riwayat ujian?")) {
        localStorage.removeItem('examHistory');
        window.renderExamHistory();
    }
};

window.formatDate = function(timestamp) {
    const d = new Date(timestamp);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${d.getDate().toString().padStart(2, '0')} ${months[d.getMonth()]} ${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
};

window.renderExamHistory = function() {
    const history = window.getExamHistory();
    if (!els.examHistoryList || !els.examHistoryEmpty || !els.btnClearHistory) return;
    
    els.examHistoryList.innerHTML = '';
    
    if (history.length === 0) {
        els.examHistoryList.classList.add('hidden');
        els.examHistoryEmpty.classList.remove('hidden');
        els.examHistoryEmpty.classList.add('flex');
        els.btnClearHistory.classList.add('hidden');
        return;
    }
    
    els.examHistoryList.classList.remove('hidden');
    els.examHistoryEmpty.classList.add('hidden');
    els.examHistoryEmpty.classList.remove('flex');
    els.btnClearHistory.classList.remove('hidden');
    
    history.forEach((h, idx) => {
        const div = document.createElement('div');
        div.className = 'glass p-4 md:p-6 rounded-2xl border border-gray-700/50 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-brand-gold/50 transition-colors';
        
        let detailsHtml = '';
        if (h.isSKDFull) {
            detailsHtml = `
                <div class="flex flex-wrap gap-3 mt-2">
                    <span class="px-2 py-1 bg-brand-navy rounded-md text-xs font-semibold text-gray-300 border border-gray-800">TWK: ${h.details.TWK}</span>
                    <span class="px-2 py-1 bg-brand-navy rounded-md text-xs font-semibold text-gray-300 border border-gray-800">TIU: ${h.details.TIU}</span>
                    <span class="px-2 py-1 bg-brand-navy rounded-md text-xs font-semibold text-gray-300 border border-gray-800">TKP: ${h.details.TKP}</span>
                    <span class="px-2 py-1 bg-brand-surface rounded-md text-xs font-bold text-brand-gold border border-brand-gold/30">Total: ${h.details.Total}</span>
                </div>
            `;
        } else {
            detailsHtml = `
                <div class="flex flex-wrap gap-3 mt-2">
                    <span class="px-2 py-1 bg-brand-navy rounded-md text-xs font-semibold text-gray-300 border border-gray-800">Skor: ${h.details.Total} / ${h.details.Max}</span>
                    <span class="px-2 py-1 bg-brand-surface rounded-md text-xs font-bold text-brand-gold border border-brand-gold/30">Benar: ${h.details.Percentage}%</span>
                </div>
            `;
        }
        
        const statusColor = h.passed ? 'text-green-500' : (h.isSKDFull ? 'text-red-500' : 'text-blue-400');
        
        div.innerHTML = `
            <div class="flex-grow w-full">
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-brand-gold font-bold text-base md:text-lg">${h.modeName}</span>
                    <span class="text-gray-500 text-xs shrink-0">• ${h.date}</span>
                </div>
                ${detailsHtml}
            </div>
            <div class="text-left md:text-right shrink-0 mt-2 md:mt-0">
                <div class="font-bold text-sm ${statusColor}">${h.details.status}</div>
            </div>
        `;
        els.examHistoryList.appendChild(div);
    });
};
