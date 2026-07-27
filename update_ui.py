import re

# Update style.css
with open("style.css", "w", encoding="utf-8") as f:
    f.write("""/* Custom Scrollbar for better UI */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a; 
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155; 
    border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #d4af37; 
}

/* Glassmorphism */
.glass {
    background: rgba(15, 23, 42, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(212, 175, 55, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}
.glass-panel {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.gold-gradient {
    background: linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
    background-size: 300% 300%;
    animation: gradientMove 4s ease infinite;
    color: #020617 !important;
    border: none;
}
.gold-text {
    background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Question Navigation Grid Button */
.nav-btn {
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 0.375rem;
    border: 1px solid #334155;
    background-color: #1e293b;
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.3s ease;
}
.nav-btn:hover {
    border-color: #d4af37;
    background-color: rgba(212, 175, 55, 0.1);
    color: #f8fafc;
}
.nav-btn.active-q {
    border-color: #fcf6ba;
    border-width: 2px;
    box-shadow: 0 0 12px rgba(252, 246, 186, 0.4);
    color: #fff;
}
.nav-btn.answered {
    background: linear-gradient(135deg, #bf953f, #b38728);
    color: #020617;
    border-color: #d4af37;
}
.nav-btn.ragu {
    background-color: #ea580c; /* orange-600 */
    color: white;
    border-color: #ea580c;
}

/* Radio Button Styling for Options */
.option-label {
    display: flex;
    cursor: pointer;
    border: 1px solid #334155;
    background-color: rgba(30, 41, 59, 0.4);
    border-radius: 0.5rem;
    padding: 1rem;
    transition: all 0.3s ease;
    align-items: flex-start;
    gap: 1rem;
    color: #e2e8f0;
}
.option-label:hover {
    background-color: rgba(212, 175, 55, 0.05);
    border-color: #d4af37;
}
.option-input:checked + .option-label {
    border-color: #d4af37;
    background-color: rgba(212, 175, 55, 0.15);
    box-shadow: inset 0 0 0 1px #d4af37;
}
.option-input:checked + .option-label .option-letter {
    background: linear-gradient(135deg, #bf953f, #b38728);
    color: #020617;
    border-color: #d4af37;
}
.option-letter {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 1px solid #475569;
    font-weight: 700;
    color: #94a3b8;
    transition: all 0.3s ease;
}

#cb-ragu {
    accent-color: #ea580c;
}
.eval-item {
    transition: all 0.3s ease;
}

.loading-dots::after {
  content: ' .';
  animation: dots 1.5s steps(5, end) infinite;
}
@keyframes dots {
  0%, 20% { color: rgba(0,0,0,0); text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0); }
  40% { color: #d4af37; text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0); }
  60% { text-shadow: .25em 0 0 #d4af37, .5em 0 0 rgba(0,0,0,0); }
  80%, 100% { text-shadow: .25em 0 0 #d4af37, .5em 0 0 #d4af37; }
}
""")

# Process index.html to apply the dark gold theme
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update tailwind config in head
tw_config = """
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            navy: '#020617', /* slate-950 */
                            surface: '#0f172a', /* slate-900 */
                            panel: '#1e293b', /* slate-800 */
                            gold: '#d4af37',
                            goldlight: '#fcf6ba',
                            light: '#f8fafc', /* slate-50 */
                            muted: '#94a3b8' /* slate-400 */
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
"""
html = re.sub(r'tailwind\.config\s*=\s*\{.*?\n\s*\}', tw_config.strip(), html, flags=re.DOTALL)

# Replace all occurrences of bg-white to bg-brand-surface
html = html.replace('bg-white', 'bg-brand-surface')
html = html.replace('bg-brand-gray', 'bg-brand-navy')
html = html.replace('text-brand-navy', 'text-brand-light')
html = html.replace('text-gray-800', 'text-white')
html = html.replace('text-gray-700', 'text-gray-300')
html = html.replace('text-gray-600', 'text-gray-400')
html = html.replace('text-gray-500', 'text-brand-muted')
html = html.replace('bg-gray-50', 'bg-brand-panel border-gray-700')
html = html.replace('bg-gray-100', 'bg-brand-surface border border-brand-gold text-brand-gold')
html = html.replace('border-gray-100', 'border-gray-700')
html = html.replace('border-gray-200', 'border-gray-700')
html = html.replace('border-gray-300', 'border-gray-600')

# Specific targeted replacements for custom glass & gradients
html = html.replace('bg-brand-navy text-white shadow-md', 'glass text-white shadow-lg')
html = html.replace('bg-brand-green text-white p-2 rounded-lg font-bold', 'gold-gradient p-2 rounded-lg font-extrabold text-brand-navy')

html = html.replace('bg-brand-navy bg-opacity-90', 'bg-brand-navy bg-opacity-95 backdrop-blur-md')
html = html.replace('border-brand-green', 'border-brand-gold')
html = html.replace('bg-brand-green', 'bg-brand-gold')
html = html.replace('text-brand-green', 'text-brand-gold')

# Dashboard cards
html = html.replace('bg-brand-surface rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl w-full border border-gray-700', 'glass rounded-2xl p-8 md:p-12 max-w-4xl w-full')
html = html.replace('bg-brand-surface p-5 rounded-xl border border-gray-700', 'glass-panel p-5 rounded-xl border border-gray-700')
html = html.replace('bg-brand-surface p-5 rounded-xl border-2 border-brand-gold', 'glass-panel p-5 rounded-xl border border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]')
html = html.replace('bg-brand-gold text-white', 'gold-gradient text-brand-navy') # Indicator
html = html.replace('hover:border-brand-gold cursor-pointer transition-all relative overflow-hidden', 'hover:border-brand-gold hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] cursor-pointer transition-all relative overflow-hidden')

# Config inputs
html = html.replace('bg-brand-surface px-4 py-2 border border-gray-600', 'bg-brand-navy px-4 py-2 border border-gray-700 text-white')
html = html.replace('focus:ring-brand-green focus:border-brand-green', 'focus:ring-brand-gold focus:border-brand-gold')

# Buttons
html = html.replace('bg-brand-gold hover:bg-emerald-600', 'gold-gradient')
html = html.replace('bg-brand-navy text-white font-bold rounded-lg hover:bg-slate-800', 'gold-gradient font-bold rounded-lg text-brand-navy')

# Exam Layout
html = html.replace('bg-brand-surface custom-scrollbar relative', 'bg-brand-navy custom-scrollbar relative')
html = html.replace('border-b border-gray-700 sticky top-0 bg-brand-surface z-10 pt-2', 'border-b border-gray-800 sticky top-0 bg-brand-navy z-10 pt-2 backdrop-blur-md bg-opacity-90')
html = html.replace('bg-brand-panel border-l border-gray-700 flex flex-col', 'bg-brand-surface border-l border-gray-800 flex flex-col')
html = html.replace('text-brand-light timer-display', 'gold-text timer-display') # Timer text
html = html.replace('bg-brand-surface border border-gray-600 rounded-full', 'bg-brand-panel border border-gray-600 rounded-full')
html = html.replace('p-4 bg-brand-surface border-t border-gray-700 mt-auto', 'p-4 bg-brand-surface border-t border-gray-800 mt-auto')
html = html.replace('bg-blue-100 text-blue-800', 'gold-gradient text-brand-navy')
html = html.replace('border-2 border-gray-600 text-gray-400 font-bold rounded-lg hover:bg-brand-panel', 'border-2 border-gray-600 text-gray-300 font-bold rounded-lg hover:bg-brand-surface hover:border-gray-500')
html = html.replace('bg-brand-yellow text-white font-bold rounded-lg hover:bg-amber-600', 'bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700')

# Eval layout
html = html.replace('bg-brand-surface rounded-2xl shadow-sm p-6 md:p-8 border border-gray-700', 'glass rounded-2xl shadow-xl p-6 md:p-8 border border-gray-800')
html = html.replace('bg-brand-surface border border-brand-gold text-brand-gold mt-2', 'bg-brand-surface border border-brand-gold text-brand-gold mt-2')
html = html.replace('text-brand-light tracking-tighter', 'gold-text tracking-tighter')

# Bars
html = html.replace('bg-blue-500 h-2.5', 'bg-brand-gold h-2.5 shadow-[0_0_10px_rgba(212,175,55,0.5)]')
html = html.replace('bg-purple-500 h-2.5', 'bg-brand-gold h-2.5 shadow-[0_0_10px_rgba(212,175,55,0.5)]')
html = html.replace('bg-orange-500 h-2.5', 'bg-brand-gold h-2.5 shadow-[0_0_10px_rgba(212,175,55,0.5)]')
html = html.replace('bg-gray-200 rounded-full h-2.5', 'bg-gray-800 rounded-full h-2.5')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
