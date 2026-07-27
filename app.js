// Constants & Passing Grades
const PASSING_GRADES = {
    TWK: 65,  // 30 soal x 5 = 150 max
    TIU: 80,  // 35 soal x 5 = 175 max
    TKP: 166  // 45 soal x 5 = 225 max
};
const MAX_SCORES = { TWK: 150, TIU: 175, TKP: 225 };

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
    apiKey: '',
    selectedMode: 1,
    questions: [], // Array of questions
    userAnswers: {}, // { questionIndex: { answer: 'A', ragu: false } }
    currentQuestionIndex: 0,
    timerSeconds: MODES[1].duration,
    timerInterval: null
};

// DOM Elements
const els = {
    // Views
    dashboardView: document.getElementById('dashboard-view'),
    examView: document.getElementById('exam-view'),
    evaluationView: document.getElementById('evaluation-view'),
    loadingOverlay: document.getElementById('loading-overlay'),
    
    // Dashboard
    apiKeyInput: document.getElementById('api-key'),
    btnStart: document.getElementById('btn-start'),
    modeCards: document.querySelectorAll('.mode-card'),
    tabFull: document.getElementById('tab-full'),
    tabDrill: document.getElementById('tab-drill'),
    tabContentFull: document.getElementById('tab-content-full'),
    tabContentDrill: document.getElementById('tab-content-drill'),
    
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

// Initialization
function init() {
    // Load API key from local storage
    const savedApiKey = localStorage.getItem('gemini_api_key');
    if (savedApiKey) {
        els.apiKeyInput.value = savedApiKey;
        appState.apiKey = savedApiKey;
    }

    // Mode Selection Listeners
    els.modeCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active classes
            els.modeCards.forEach(c => {
                c.classList.remove('active', 'border-brand-gold', 'shadow-[0_0_15px_rgba(212,175,55,0.3)]');
                c.classList.add('border-gray-700', 'hover:border-brand-gold', 'hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]');
                const indicator = c.querySelector('.indicator');
                if(indicator) indicator.classList.add('hidden');
            });
            // Add active classes
            card.classList.add('active', 'border-brand-gold', 'shadow-[0_0_15px_rgba(212,175,55,0.3)]');
            card.classList.remove('border-gray-700', 'hover:border-brand-gold', 'hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]');
            const indicator = card.querySelector('.indicator');
            if(indicator) indicator.classList.remove('hidden');
            
            appState.selectedMode = parseInt(card.dataset.mode);
        });
    });

    // Tab Switcher Listeners
    if(els.tabFull && els.tabDrill) {
        els.tabFull.addEventListener('click', () => {
            els.tabFull.className = 'tab-btn flex-1 sm:flex-none px-4 sm:px-8 py-2.5 rounded-lg text-sm font-bold transition-all gold-gradient text-brand-navy shadow-sm';
            els.tabDrill.className = 'tab-btn flex-1 sm:flex-none px-4 sm:px-8 py-2.5 rounded-lg text-sm font-bold text-gray-400 hover:text-white transition-all';
            
            els.tabContentFull.classList.remove('hidden');
            els.tabContentDrill.classList.add('hidden');
            
            // Auto select Mode 1
            els.modeCards[0].click();
        });

        els.tabDrill.addEventListener('click', () => {
            els.tabDrill.className = 'tab-btn flex-1 sm:flex-none px-4 sm:px-8 py-2.5 rounded-lg text-sm font-bold transition-all gold-gradient text-brand-navy shadow-sm';
            els.tabFull.className = 'tab-btn flex-1 sm:flex-none px-4 sm:px-8 py-2.5 rounded-lg text-sm font-bold text-gray-400 hover:text-white transition-all';
            
            els.tabContentDrill.classList.remove('hidden');
            els.tabContentFull.classList.add('hidden');
            
            // Auto select Mode 2 if coming from Mode 1
            if (appState.selectedMode === 1) {
                els.modeCards[1].click();
            }
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

async function callGemini(prompt, isJson = true) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${appState.apiKey}`;
    
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            temperature: 0.7,
        }
    };
    
    if (isJson) {
        payload.generationConfig.responseMimeType = "application/json";
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error?.message || 'API request failed');
        }

        const data = await response.json();
        let textResult = data.candidates[0].content.parts[0].text;
        
        if (isJson) {
            return JSON.parse(textResult);
        }
        return textResult;
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    }
}

async function startSimulation() {
    appState.apiKey = els.apiKeyInput.value.trim();
    if (!appState.apiKey) {
        alert("Silakan masukkan Google Gemini API Key terlebih dahulu.");
        return;
    }
    
    localStorage.setItem('gemini_api_key', appState.apiKey);
    
    // Set Time based on mode
    const modeConfig = MODES[appState.selectedMode];
    appState.timerSeconds = modeConfig.duration;

    // Show Loading
    els.loadingOverlay.classList.remove('hidden');
    els.loadingOverlay.classList.add('flex');
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
            const pTwk = generateQuestionsData('TWK', 30, BANK_REFERENSI.twk_only);
            const pTiu = generateQuestionsData('TIU', 35, BANK_REFERENSI.tiu_only);
            const pTkp = generateQuestionsData('TKP', 45, BANK_REFERENSI.tkp_only);

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
            
            const rawData = await generateQuestionsData(modeConfig.kategori, modeConfig.count, BANK_REFERENSI[bankKey]);
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
            els.loadingOverlay.classList.remove('flex');
            els.loadingOverlay.classList.add('hidden');
            els.dashboardView.classList.add('hidden');
            els.examView.classList.remove('hidden');
            els.examView.classList.add('flex');
            
            startTimer();
            navigateQuestion(0);
        }, 500);

    } catch (error) {
        els.loadingOverlay.classList.remove('flex');
        els.loadingOverlay.classList.add('hidden');
        alert("Gagal memuat soal dari API. Periksa kembali API Key Anda atau coba beberapa saat lagi.\n\nDetail: " + error.message);
    }
}

async function generateQuestionsData(kategori, jumlah, refBank) {
    const samples = getRandomSamples(refBank, 3);
    const sampleStr = JSON.stringify(samples, null, 2);
    
    let instructions = "";
    if (kategori === 'TWK') {
        instructions = `Fokus pada implementasi dan penalaran, berbasis studi kasus tentang Nasionalisme, Integritas, Bela Negara, Pilar Negara, dan implementasi UUD 1945. kunci: (A/B/C/D/E), bobotTKP: null.`;
    } else if (kategori === 'TIU') {
        instructions = `Cakup Kemampuan Verbal, Numerik, dan Figural (deskripsikan gambar dengan teks). kunci: (A/B/C/D/E), bobotTKP: null.`;
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
Output WAJIB berupa JSON Array murni array of objects: [{"no": 1, "kategori": "${kategori}", "pertanyaan": "...", "pilihan": {"A": "...", "B": "...", "C": "...", "D": "...", "E": "..."}, "kunci": "A", "bobotTKP": null}, ...].`;

    return callGemini(prompt, true);
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
    els.questionText.innerText = q.pertanyaan;

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
        textDiv.className = 'mt-0.5 text-gray-300 leading-relaxed';
        textDiv.innerText = text;

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    els.examView.classList.add('hidden');
    els.examView.classList.remove('flex');
    els.evaluationView.classList.remove('hidden');
    
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

        // AI Explanation Area
        let aiAreaHtml = `
            <div class="mt-4 pt-4 border-t border-gray-800">
                <button id="btn-ai-${idx}" class="text-sm font-semibold text-brand-gold flex items-center gap-2 hover:text-white transition" onclick="fetchExplanation(${idx})">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    Minta Pembahasan AI
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
    
    btn.innerHTML = `<span class="loading-dots">AI sedang menganalisis</span>`;
    btn.disabled = true;

    const prompt = `Berikan pembahasan mendalam tapi ringkas untuk soal SKD berikut.
Kategori: ${q.kategori}
Pertanyaan: ${q.pertanyaan}
Pilihan: ${JSON.stringify(q.pilihan)}
Jawaban User: ${uAns ? uAns : 'Kosong'}
${q.kategori !== 'TKP' ? 'Kunci Benar: ' + q.kunci : 'Bobot TKP: ' + JSON.stringify(q.bobotTKP)}

Tugas AI:
1. Berikan penjelasan mengapa kunci/bobot tertingginya adalah yang benar.
2. Analisis kesalahan jawaban user (jika salah).
3. Berikan trik cepat / konsep dasar yang perlu diingat untuk tipe soal ini.
Gunakan markdown yang rapi. Jangan tulisulang soal, langsung ke poin pembahasan.`;

    try {
        const textRes = await callGemini(prompt, false);
        
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
