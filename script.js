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
        coaching: "—"
    },
    {
        name: "Sarah Farooq",
        coreSessions: "—",
        clinics: "Day 3",
        coaching: "—"
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
        clinics: "—",
        coaching: "—"
    }
];

// Render Faculty Roles Table
function renderFacultyRoles() {
    const table = document.querySelector('.roles-table');
    const rows = facultyRoles.map(role => `
        <div class="table-row">
            <div class="col col-1">${role.name}</div>
            <div class="col col-2">${role.coreSessions}</div>
            <div class="col col-3">${role.clinics}</div>
            <div class="col col-4">${role.coaching}</div>
        </div>
    `).join('');

    table.innerHTML += rows;
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
    timeline.innerHTML = programDays.map(day => `
        <div class="day-card">
            <div class="day-header">${day.day}</div>
            <div class="day-theme">${day.theme}</div>
            <p style="font-size: 0.9rem; color: #999;">${day.date}</p>
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
    grid.innerHTML = activities.map(activity => `
        <div class="activity-card">
            <div class="activity-icon">🎯</div>
            <div class="activity-name">${activity.name}</div>
            <p style="font-size: 0.85rem; color: #999; margin-bottom: 0.6rem;">${activity.day}</p>
            <p class="activity-desc">${activity.desc}</p>
        </div>
    `).join('');
}

// Initialize all functions on page load
document.addEventListener('DOMContentLoaded', () => {
    renderFellows();
    renderFacultyRoles();
    renderProgram();
    renderActivities();
});
