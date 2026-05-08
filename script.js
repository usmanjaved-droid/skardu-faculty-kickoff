// Fellow Data
const fellows = [
    {
        name: "Dr. Rubeena Kidwai",
        org: "Taskeen Health Initiative",
        sector: "Mental Health",
        idea: "Mental health support through helplines and counseling to reduce stigma and increase awareness"
    },
    {
        name: "Azima Dhanjee",
        org: "ConnectHear",
        sector: "Disability",
        idea: "Make hearing aids affordable and accessible to low-income hearing-impaired people"
    },
    {
        name: "Habiba Banu",
        org: "Spiro",
        sector: "Health",
        idea: "Provide affordable respiratory care and asthma management tools for low-income patients"
    },
    {
        name: "Saad Hussain",
        org: "Awaaz-e-Sehat Foundation",
        sector: "Health",
        idea: "AI-powered voice-activated technology in Urdu to detect maternal health risks early"
    },
    {
        name: "Lala Rukh Fazal-Ur-Rahman",
        org: "Science Fuse",
        sector: "Education",
        idea: "STEM education to underserved students through hands-on activities and shows"
    },
    {
        name: "Khushbakht Shah Jillani",
        org: "Mehfooz AI",
        sector: "Legal",
        idea: "AI-powered support for domestic violence survivors through evidence analysis and legal briefs"
    },
    {
        name: "Maira Siddiqui",
        org: "Chiragh Education Technologies",
        sector: "Education",
        idea: "Gamified curriculum cartoons in local languages for smartphone-based learning"
    },
    {
        name: "Adnan Qureshi",
        org: "Teach the World Foundation",
        sector: "Education",
        idea: "Digital learning to underserved communities through MicroSchools and smartphone apps"
    },
    {
        name: "Muhammad Waqas",
        org: "WonderTree",
        sector: "Special Education",
        idea: "Augmented reality games to help children with special needs develop physical and social skills"
    },
    {
        name: "Ali Siddiq",
        org: "Amal Academy",
        sector: "Livelihoods",
        idea: "Bridge gap between university and job market through fellowship with critical thinking skills"
    },
    {
        name: "Osama Shahid",
        org: "Soby Trading Co",
        sector: "Agriculture",
        idea: "Empower marginalized communities through fair trade practices and direct market linkages"
    }
];

// Render Fellows Grid
function renderFellows() {
    const grid = document.querySelector('.fellows-grid');
    if (!grid) {
        console.error('Element .fellows-grid not found');
        return;
    }
    grid.innerHTML = fellows.map(fellow => `
        <div class="fellow-card">
            <div class="fellow-name">${fellow.name}</div>
            <div class="fellow-org">${fellow.org}</div>
            <span class="fellow-sector">${fellow.sector}</span>
            <p class="fellow-idea">${fellow.idea}</p>
        </div>
    `).join('');
}

// Faculty Roles Data
const facultyRoles = [
    {
        name: "Kevin Starr",
        coreSessions: "Design for Impact (D1), Scale Screen (D2), Iterative Org (D4)",
        clinics: "Day 3",
        coaching: "Demo Day judge"
    },
    {
        name: "Dr. Ahson Rabbani",
        coreSessions: "Spotlight Session (D4), Moderated TCF Session (D4)",
        clinics: "Day 3",
        coaching: "Day 5"
    },
    {
        name: "Dr. Sara Saeed Khurram",
        coreSessions: "Spotlight session (D5)",
        clinics: "Day 3",
        coaching: "Day 5"
    },
    {
        name: "Sarah Farooq",
        coreSessions: "Fellow Engagement Management",
        clinics: "Day 3",
        coaching: "Day 5"
    },
    {
        name: "Nadir Shams + Sabeena Abbasi",
        coreSessions: "Communications (D5)",
        clinics: "—",
        coaching: "Day 5"
    },
    {
        name: "Haroon Yasin",
        coreSessions: "Open Sourcing (D4, pending)",
        clinics: "Day 3",
        coaching: "Day 5"
    }
];

// Render Faculty Roles Table
function renderFacultyRoles() {
    const table = document.querySelector('.roles-table');
    if (!table) {
        console.error('Element .roles-table not found');
        return;
    }
    const rows = facultyRoles.map(role => `
        <div class="table-row">
            <div class="col col-1">${role.name}</div>
            <div class="col col-2">${role.coreSessions}</div>
            <div class="col col-3">${role.clinics}</div>
            <div class="col col-4">${role.coaching}</div>
        </div>
    `).join('');

    const headerRow = table.querySelector('.table-row.header');
    if (headerRow) {
        headerRow.insertAdjacentHTML('afterend', rows);
    } else {
        table.innerHTML = rows;
    }
}

// Program Timeline Data
const programDays = [
    {
        day: "Day 0",
        date: "Sunday, June 7",
        theme: "Arrivals & Orientation",
        highlights: ["Staggered arrivals", "Welcome dinner", "Norm-setting orientation"]
    },
    {
        day: "Day 1",
        date: "Monday, June 8",
        theme: "Design for Impact",
        highlights: ["Core: Mission, Big Idea, Theory", "Model & Behavior Map", "Doer & Payer at Scale", "One-pager draft due"]
    },
    {
        day: "Day 2",
        date: "Tuesday, June 9",
        theme: "Scale Strategy + Impact Evidence",
        highlights: ["Scale Screen Framework", "Impact Evidence levels", "Fellows Lightning Talks", "Fireside Chat with Kevin"]
    },
    {
        day: "Day 3",
        date: "Wednesday, June 10",
        theme: "1-on-1 Clinics (Outdoor)",
        highlights: ["Travel to Chinda Valley", "Rotating 1-on-1 sessions", "Sightseeing activities", "Faculty lightning talks"]
    },
    {
        day: "Day 4",
        date: "Thursday, June 11",
        theme: "Iterative Organization",
        highlights: ["Iterative Org theory & methods", "People/Culture deep dive", "Faculty talks (TCF vs. Ahson session)"]
    },
    {
        day: "Day 5",
        date: "Friday, June 12",
        theme: "Communications + Pitch Coaching",
        highlights: ["Communications theory", "Capacity clinic (pitch prep)", "1:1 pitch coaching", "Cultural Night"]
    },
    {
        day: "Day 6",
        date: "Saturday, June 13",
        theme: "Demo Day",
        highlights: ["Dress rehearsal", "Participant presentations", "Q&A with faculty", "Closing celebration dinner"]
    },
    {
        day: "Day 7",
        date: "Sunday, June 14",
        theme: "Departures",
        highlights: ["Breakfast", "Staggered checkouts", "Optional Karakoram excursion"]
    }
];

// Render Program Timeline
function renderProgram() {
    const timeline = document.querySelector('.program-timeline');
    if (!timeline) {
        console.error('Element .program-timeline not found');
        return;
    }
    timeline.innerHTML = programDays.map(day => `
        <div class="day-card">
            <div class="day-header">${day.day}</div>
            <div class="day-theme">${day.theme}</div>
            <p class="day-date">${day.date}</p>
            <ul class="day-highlights">
                ${day.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Engagement Activities Data
const activities = [
    {
        name: "Cultural Night",
        day: "Day 5",
        desc: "Everyone wears cultural dress, shares cultural snacks. Live music, BBQ by the river, open networking."
    },
    {
        name: "Fireside Chat",
        day: "Day 2",
        desc: "Kevin shares his personal journey. Founders and faculty ask questions; tea & snacks by bonfire."
    },
    {
        name: "Sightseeing & Activities",
        day: "Day 3",
        desc: "Break during outdoor clinic. Optional outdoor activities, journaling, team games, relaxation."
    },
    {
        name: "Demo Day",
        day: "Day 6",
        desc: "5-min presentation + Q&A per founder. Faculty as observers, judges, and feedback providers."
    },
    {
        name: "Morning Wellness",
        day: "Daily (optional)",
        desc: "Yoga, meditation, walks led by Nadir or Sabeena. Start your day centered."
    },
    {
        name: "Open Networking",
        day: "Throughout",
        desc: "Informal conversations with peers, fellows, funders during meals, breaks, and free time."
    }
];

// Render Activities Grid
function renderActivities() {
    const grid = document.querySelector('.activities-grid');
    if (!grid) {
        console.error('Element .activities-grid not found');
        return;
    }
    grid.innerHTML = activities.map(activity => `
        <div class="activity-card">
            <div class="activity-icon">🎯</div>
            <div class="activity-name">${activity.name}</div>
            <p class="activity-day">${activity.day}</p>
            <p class="activity-desc">${activity.desc}</p>
        </div>
    `).join('');
}

// Detailed Schedule Data
const detailedSchedule = [
    {
        day: "Day 0",
        date: "Sunday, June 7",
        blocks: [
            { time: "07:00", activity: "✈️ ARRIVALS & CHECK-IN", details: "Staggered arrivals, airport pickups, check-in, welcome tea" },
            { time: "18:30", activity: "🍽️ WELCOME DINNER", details: "6:30 – 7:30 PM, Relaxed seated dinner" },
            { time: "19:30", activity: "ORIENTATION", details: "7:30 – 9:00 PM, Introductions, norm setting, week overview" },
            { time: "23:00", activity: "⚠️ CUT OFF: 11 PM", details: "End of day" }
        ]
    },
    {
        day: "Day 1",
        date: "Monday, June 8",
        blocks: [
            { time: "07:30", activity: "WELCOME BREAKFAST", details: "7:30 – 8:30 AM, Mulago-style icebreaker" },
            { time: "09:00", activity: "DESIGN FOR IMPACT AT SCALE (Block 1)", details: "9:00 – 10:30 AM, Mission, Big Idea, Theory" },
            { time: "11:00", activity: "DESIGN FOR IMPACT AT SCALE (Block 2)", details: "11:00 AM – 1:00 PM, Model, Behavior Map" },
            { time: "14:00", activity: "DOER & PAYER AT SCALE + SCALABILITY", details: "2:00 – 5:30 PM, Four Enoughs, Evidence Progression" },
            { time: "18:00", activity: "INTEGRATION + SYNTHESIS", details: "6:00 – 7:30 PM, Reflection, peer feedback, One-pager draft due" }
        ]
    },
    {
        day: "Day 2",
        date: "Tuesday, June 9",
        blocks: [
            { time: "07:00", activity: "YOGA / MORNING WALK / MEDITATION (optional)", details: "7:00 – 7:30 AM" },
            { time: "09:00", activity: "SCALE STRATEGY — PART 1", details: "9:00 – 10:30 AM, Scale Screen Framework" },
            { time: "11:00", activity: "SCALE STRATEGY — PART 2", details: "11:00 AM – 1:00 PM, Applying to Your Org" },
            { time: "14:00", activity: "IMPACT EVIDENCE", details: "2:00 – 5:00 PM, Levels of Evidence, Evidence Plans" },
            { time: "17:30", activity: "⚡ FELLOWS LIGHTNING TALKS", details: "5:30 – 7:30 PM, 5 × 8-min talks + Q&A" },
            { time: "20:30", activity: "⚡ FIRESIDE CHAT WITH KEVIN", details: "8:30 – 10:00 PM, Kevin's Story + Q&A" }
        ]
    },
    {
        day: "Day 3",
        date: "Wednesday, June 10",
        blocks: [
            { time: "07:30", activity: "BREAKFAST", details: "7:30 – 8:30 AM" },
            { time: "08:30", activity: "🚐 TRAVEL TO CHINDA VALLEY", details: "8:30 – 10:00 AM, Outdoor location setup" },
            { time: "10:30", activity: "STRUCTURED 1-ON-1s WITH FACULTY (Block A)", details: "10:30 AM – 1:00 PM, 45-min rotating sessions" },
            { time: "14:00", activity: "STRUCTURED 1-ON-1s WITH FACULTY (Block B)", details: "2:00 – 4:00 PM, Continued rotating sessions" },
            { time: "16:00", activity: "🏔️ SIGHTSEEING + ACTIVITIES", details: "4:00 – 6:00 PM, Optional outdoor activities" },
            { time: "20:30", activity: "INTERACTIVE SESSION WITH FACULTY", details: "8:30 – 11:00 PM, Lightning talks + Moderated sessions" }
        ]
    },
    {
        day: "Day 4",
        date: "Thursday, June 11",
        blocks: [
            { time: "07:00", activity: "YOGA / MORNING WALK / MEDITATION (optional)", details: "7:00 – 7:30 AM" },
            { time: "09:00", activity: "THE ITERATIVE ORGANIZATION (Block 1)", details: "9:00 AM – 1:00 PM, Theory, methods, data flows" },
            { time: "14:30", activity: "ITERATIVE ORG WORKSHOP + People/Culture Deep Dive", details: "2:30 – 5:30 PM, Apply theory to your org" },
            { time: "17:30", activity: "FACULTY TALKS", details: "5:30 – 7:00 PM, Running tea + snacks" }
        ]
    },
    {
        day: "Day 5",
        date: "Friday, June 12",
        blocks: [
            { time: "07:00", activity: "MINDFULNESS / MORNING WALK (optional)", details: "7:00 – 7:30 AM" },
            { time: "09:00", activity: "COMMUNICATIONS — THEORY", details: "9:00 AM – 1:00 PM, Clear language, narrative structure, pitching" },
            { time: "14:30", activity: "CAPACITY CLINIC A: Building YOUR Presentation", details: "2:30 – 5:30 PM, Small group pitch prep" },
            { time: "18:00", activity: "CAPACITY CLINIC B: 1:1 Pitch Coaching", details: "6:00 – 7:30 PM, Rotating faculty coaches" },
            { time: "19:30", activity: "🎭 CULTURAL NIGHT", details: "7:30 – 9:30 PM, Cultural dress, snacks, live music, BBQ" }
        ]
    },
    {
        day: "Day 6",
        date: "Saturday, June 13",
        blocks: [
            { time: "07:30", activity: "BREAKFAST", details: "7:30 – 8:30 AM" },
            { time: "09:00", activity: "FINAL PREP + DRESS REHEARSAL", details: "9:00 – 10:30 AM" },
            { time: "10:30", activity: "★ DEMO DAY — BLOCK 1 ★", details: "10:30 AM – 1:00 PM, Participant presentations" },
            { time: "14:00", activity: "★ DEMO DAY — BLOCK 2 ★", details: "2:00 – 4:00 PM, Remaining presentations" },
            { time: "16:00", activity: '"WHAT\'S NEXT?" WRAP', details: "4:00 – 5:00 PM, Tea/Coffee + Snacks" },
            { time: "17:00", activity: "OPEN NETWORKING", details: "5:00 – 7:00 PM" },
            { time: "19:00", activity: "🎉 CLOSING CELEBRATION DINNER", details: "7:00 – 9:00 PM, Open networking" }
        ]
    },
    {
        day: "Day 7",
        date: "Sunday, June 14",
        blocks: [
            { time: "07:30", activity: "BREAKFAST", details: "7:30 – 8:30 AM" },
            { time: "08:30", activity: "✈️ DEPARTURES", details: "From 8:00 AM onwards, Staggered checkouts" },
            { time: "Optional", activity: "🏔️ KARAKORAM EXCURSION", details: "For those with later flights" }
        ]
    }
];

// Render Program Calendar
function renderDetailedSchedule() {
    const container = document.querySelector('.program-calendar');
    if (!container) {
        console.error('Element .program-calendar not found');
        return;
    }

    // Create calendar grid
    const calendarHTML = `
        <div class="calendar-header">
            <div class="calendar-month">June 2026</div>
        </div>
        <div class="calendar-grid">
            ${detailedSchedule.map((day, index) => {
                const dayNum = 7 + index; // June 7-14
                const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
                const topActivities = day.blocks.slice(1, 3).map(b => b.activity).join(' • ');

                return `
                    <div class="calendar-day">
                        <div class="calendar-day-num">${dayNum}</div>
                        <div class="calendar-day-name">${dayOfWeek}</div>
                        <div class="calendar-day-label">${day.day}</div>
                        <div class="calendar-day-theme">${day.theme}</div>
                        <div class="calendar-day-activities">${topActivities}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    container.innerHTML = calendarHTML;
}

// Initialize all functions on page load
document.addEventListener('DOMContentLoaded', () => {
    renderFellows();
    renderFacultyRoles();
    renderProgram();
    renderActivities();
    renderDetailedSchedule();
});
