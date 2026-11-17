/* ==========================================================================
   Mouleeshwaran B - Interactive Portfolio Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Sticky & Scroll Background
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            if (navLinksContainer.style.display === 'flex') {
                navLinksContainer.style.display = 'none';
            } else {
                navLinksContainer.style.display = 'flex';
                navLinksContainer.style.flexDirection = 'column';
                navLinksContainer.style.position = 'absolute';
                navLinksContainer.style.top = '100%';
                navLinksContainer.style.left = '0';
                navLinksContainer.style.right = '0';
                navLinksContainer.style.background = 'rgba(7, 8, 12, 0.95)';
                navLinksContainer.style.padding = '1.5rem';
                navLinksContainer.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // 3. Touch Screen / Mobile Click Support for 3D Flashcards
    const flashcardWrappers = document.querySelectorAll('.flashcard-wrapper');
    flashcardWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            // Prevent flip if clicking a direct link or button inside card
            if (e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            // Toggle flipped state for mobile/touch users
            wrapper.classList.toggle('flipped');
        });
    });

    // 4. Project Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            flashcardWrappers.forEach(wrapper => {
                const category = wrapper.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    wrapper.style.display = 'block';
                    setTimeout(() => {
                        wrapper.style.opacity = '1';
                        wrapper.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    wrapper.style.opacity = '0';
                    wrapper.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        wrapper.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 5. Interactive Telemetry Simulation Console Modal
    const modalOverlay = document.getElementById('simModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const simConsole = document.getElementById('simConsole');
    const demoSimBtns = document.querySelectorAll('.btn-demo-sim');

    let simInterval = null;

    demoSimBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectType = btn.getAttribute('data-project');
            openSimulation(projectType);
        });
    });

    function openSimulation(projectType) {
        modalOverlay.classList.add('active');
        simConsole.innerHTML = '';
        if (simInterval) clearInterval(simInterval);

        if (projectType === 'clause') {
            modalTitle.innerText = "🤖 ClauseGuard AI Contract Analysis Log Stream";
            runClauseSimulation();
        } else if (projectType === 'accident') {
            modalTitle.innerText = "⚡ Accident Detection IoT Telemetry Stream";
            runAccidentSimulation();
        } else if (projectType === 'coding') {
            modalTitle.innerText = "💻 LeetCode & DSA Benchmark Suite";
            runCodingSimulation();
        }
    }

    function runClauseSimulation() {
        const logs = [
            { type: 'info', text: '[INIT] Loading Ollama local server with LLaMA 3.2 model weights...' },
            { type: 'info', text: '[PDF INGEST] Parsing sample NDA contract (18 pages, 4,200 words)...' },
            { type: 'info', text: '[NLP PIPELINE] Tokenizing clause boundaries & computing embeddings...' },
            { type: 'info', text: '[RAG VECTOR RETRIEVAL] Querying vector DB for indemnity & liability clauses...' },
            { type: 'alert', text: '⚠️ [HIGH RISK CLAUSE DETECTED] Clause 14.3: Unlimited Indemnification Clause flagged (Risk Score: 88/100)' },
            { type: 'info', text: '[DELTA ANALYSIS] Compared against Master Template v2.1 — 3 modifications identified.' },
            { type: 'info', text: '[COMPLETE] Risk assessment report generated cleanly.' }
        ];

        let i = 0;
        simInterval = setInterval(() => {
            if (i < logs.length) {
                const line = document.createElement('div');
                line.className = `sim-line ${logs[i].type}`;
                line.innerText = logs[i].text;
                simConsole.appendChild(line);
                simConsole.scrollTop = simConsole.scrollHeight;
                i++;
            } else {
                clearInterval(simInterval);
            }
        }, 700);
    }

    function runAccidentSimulation() {
        const logs = [
            { type: 'info', text: '[SYSTEM INIT] MPU6050 Accelerometer initialized on I2C bus 0x68...' },
            { type: 'info', text: '[GPS READY] NEO-6M fixed 12 satellites. Coordinates: 11.0168° N, 76.9558° E (Coimbatore)' },
            { type: 'info', text: '[STATUS] Monitoring vehicle orientation & impact acceleration thresholds...' },
            { type: 'alert', text: '⚠️ [EVENT TRIGGERED] Impact force detected > 4.2G threshold on X-axis!' },
            { type: 'alert', text: '🚨 [CRASH CONFIRMED] Auto-alert sequence initiated...' },
            { type: 'info', text: '[SMS DISPATCH] Encoded payload sent via GSM module SIM800L to Emergency Contact (+91-6369774454)' },
            { type: 'info', text: '[LOCATION LINK] https://maps.google.com/?q=11.0168,76.9558' }
        ];

        let i = 0;
        simInterval = setInterval(() => {
            if (i < logs.length) {
                const line = document.createElement('div');
                line.className = `sim-line ${logs[i].type}`;
                line.innerText = logs[i].text;
                simConsole.appendChild(line);
                simConsole.scrollTop = simConsole.scrollHeight;
                i++;
            } else {
                clearInterval(simInterval);
            }
        }, 700);
    }

    function runCodingSimulation() {
        const logs = [
            { type: 'info', text: '[BENCHMARK] Running DSA Suite (LeetCode & GeeksforGeeks problems)...' },
            { type: 'info', text: '[ARRAY & STRINGS] 150+ GFG Problems executed in 0.042s. All tests PASSED.' },
            { type: 'info', text: '[HACKATHONS] Smart India Hackathon (SIH 2025) college selection verified.' },
            { type: 'info', text: '[TEXPERIA 2026] SNS Institutions hackathon submission active.' }
        ];

        let i = 0;
        simInterval = setInterval(() => {
            if (i < logs.length) {
                const line = document.createElement('div');
                line.className = `sim-line ${logs[i].type}`;
                line.innerText = logs[i].text;
                simConsole.appendChild(line);
                simConsole.scrollTop = simConsole.scrollHeight;
                i++;
            } else {
                clearInterval(simInterval);
            }
        }, 750);
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            if (simInterval) clearInterval(simInterval);
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                if (simInterval) clearInterval(simInterval);
            }
        });
    }

    // ==========================================================================
    // 6. Custom Glowing Asteroid Cursor & Particle Trail Controller
    // ==========================================================================
    const cursor = document.getElementById('asteroidCursor');
    const follower = document.getElementById('asteroidFollower');
    const particleContainer = document.getElementById('asteroidParticleContainer');

    if (cursor && follower) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let followerX = mouseX;
        let followerY = mouseY;
        let lastParticleTime = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Update primary cursor position instantly
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;

            // Spawn asteroid tail particles (throttled ~30ms)
            const now = Date.now();
            if (now - lastParticleTime > 30) {
                spawnAsteroidParticle(mouseX, mouseY);
                lastParticleTime = now;
            }
        });

        // Smooth Physics Lerp for Follower Aura
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;

            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;

            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        function spawnAsteroidParticle(x, y) {
            if (!particleContainer) return;
            const particle = document.createElement('div');
            particle.className = 'asteroid-particle';
            
            // Random size variation between 4px and 10px
            const size = Math.random() * 6 + 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Slight offset calculation
            const offsetX = (Math.random() - 0.5) * 12;
            const offsetY = (Math.random() - 0.5) * 12;
            particle.style.left = `${x + offsetX}px`;
            particle.style.top = `${y + offsetY}px`;

            particleContainer.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 500);
        }

        // Expand Asteroid Glow when cursor is placed over responsive/interactive elements
        const interactiveSelector = 'a, button, .flashcard-wrapper, .tool-logo-card, .skill-pill, .about-card, .cert-card, .hero-badge-item';
        
        document.body.addEventListener('mouseover', (e) => {
            if (e.target.closest(interactiveSelector)) {
                cursor.classList.add('active-hover');
                follower.classList.add('active-hover');
            }
        });

        document.body.addEventListener('mouseout', (e) => {
            if (e.target.closest(interactiveSelector)) {
                cursor.classList.remove('active-hover');
                follower.classList.remove('active-hover');
            }
        });
    }
});

