let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';


//DOM ELEMENTS
let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('rejected-filter-btn');

const cardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filteredSection');

const emptyState = document.getElementById('emptyState');
const availableHeader = document.getElementById('availableHeader');
const availableJobs = document.getElementById('availableJobs');


//CALCULATE COUNTS
function calculateCount() {
    total.innerText = cardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    availableJobs.innerText = cardSection.children.length;
}
calculateCount();

function toggleEmptyState() {
    let count = 0;
    if (currentStatus === 'all-filter-btn') {
        count = cardSection.children.length;
    }
    else if (currentStatus === 'interview-filter-btn') {
        count = interviewList.length;
    }
    else if (currentStatus === 'rejected-filter-btn') {
        count = rejectedList.length;
    }

    if (count === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
    availableJobs.innerText = `${count} job${count !== 1 ? 's' : ''}`;
}
toggleEmptyState();


//FILTER BUTTON STYLE
function toggleStyle(id) {
    allFilterBtn.classList.add('text-gray-500');
    interFilterBtn.classList.add('text-gray-500');
    rejectFilterBtn.classList.add('text-gray-500');

    allFilterBtn.classList.remove('btn-primary', 'text-gray-100');
    interFilterBtn.classList.remove('btn-primary', 'text-gray-100');
    rejectFilterBtn.classList.remove('btn-primary', 'text-gray-100');

    //console.log(id);

    const selected = document.getElementById(id);
    currentStatus = id
    //console.log(selected);
    selected.classList.remove('text-gray-500');
    selected.classList.add('btn-primary', 'text-gray-100');

    if (id == 'interview-filter-btn') {
        cardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if (id == 'all-filter-btn') {
        cardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if (id == 'rejected-filter-btn') {
        cardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderReject();
    }
    toggleEmptyState();
}


//EVENT ALL BUTTON CLICKS

mainContainer.addEventListener('click', function (event) {

    //INTERVIEW BUTTON CLICK
    if (event.target.classList.contains('interBtn')) {
        const parentNode = event.target.closest('.card');

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const typeSalary = parentNode.querySelector('.typeSalary').innerText;
        const statusBtn = parentNode.querySelector('.statusBtn').innerText;
        const describe = parentNode.querySelector('.describe').innerText;

        parentNode.querySelector('.statusBtn').innerText = 'INTERVIEW';

        const cardInfo = {
            companyName,
            position,
            typeSalary,
            statusBtn: 'INTERVIEW',
            describe
        }


        const company = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!company) {
            interviewList.push(cardInfo);
        }

        // Remove from rejected list if exists
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'rejected-filter-btn') {
            renderReject();
        }

        calculateCount();
        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }
        toggleEmptyState();
    }

    //REJECT BUTTON CLICK
    else if (event.target.classList.contains('rejectBtn')) {
        const parentNode = event.target.closest('.card');

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const typeSalary = parentNode.querySelector('.typeSalary').innerText;
        const statusBtn = parentNode.querySelector('.statusBtn').innerText;
        const describe = parentNode.querySelector('.describe').innerText;

        parentNode.querySelector('.statusBtn').innerText = 'REJECTED';

        const cardInfo = {
            companyName,
            position,
            typeSalary,
            statusBtn: 'REJECTED',
            describe
        }


        const company = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!company) {
            rejectedList.push(cardInfo);
        }

        // Remove from interview list
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }

        calculateCount();
        if (currentStatus === 'rejected-filter-btn') {
            renderReject();
        }
        toggleEmptyState();


    }
    else if (event.target.classList.contains('deleteBtn')) {

        const parentNode = event.target.closest('.card');

        const companyName = parentNode.querySelector('.companyName').innerText;

        // Remove from interview list
        interviewList = interviewList.filter(item => item.companyName !== companyName);

        // Remove from rejected list
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        // Remove card from DOM
        parentNode.remove();

        // Re-render filtered section if needed
        if (currentStatus === 'interview-filter-btn') {
            renderInterview();
        }

        if (currentStatus === 'rejected-filter-btn') {
            renderReject();
        }

        calculateCount();
        toggleEmptyState();
    }
})

//RENDER INTERVIEW SECTION

function renderInterview() {
    filterSection.innerHTML = '';

    for (let interview of interviewList) {

        let div = document.createElement('div');
        div.className = 'card bg-base-100 w-full shadow-sm p-6';
        div.innerHTML = `
            <div class="flex justify-between">
                 <div class="space-y-5">

                    <div class="space-y-1">
                        <h2 class="companyName text-xl text-blue-950 font-bold">
                          ${interview.companyName}
                        </h2>
                        <p class="position text-gray-500">${interview.position}</p>
                    </div>

                    <p class="typeSalary text-gray-500">${interview.typeSalary}</p>

                    <div>
                        <button class="statusBtn btn btn-soft btn-primary text-gray-700">${interview.statusBtn}</button>
                    </div>

                    <p class="describe text-gray-500">${interview.describe}</p>

                    <div class="space-x-2">
                        <button class="interBtn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejectBtn btn btn-outline btn-error">REJECTED</button>
                        </div>
                    </div>

                    <div>
                        <button class="deleteBtn btn btn-circle"><i class="fa-regular fa-trash-can"
                                style="color: rgb(42, 58, 85);"></i></button>
                    </div>
                </div>

        `
        filterSection.appendChild(div);
    }
}

//RENDER REJECTED SECTION

function renderReject() {
    filterSection.innerHTML = '';

    for (let reject of rejectedList) {
        let div = document.createElement('div');
        div.className = 'card bg-base-100 w-full shadow-sm p-6';
        div.innerHTML = `
            <div class="flex justify-between">
                <div class="space-y-5">

                    <div class="space-y-1">
                        <h2 class="companyName text-xl  text-blue-950 font-bold">
                          ${reject.companyName}
                        </h2>
                        <p class="position text-gray-500">${reject.position}</p>
                    </div>

                    <p class="typeSalary text-gray-500">${reject.typeSalary}</p>

                    <div>
                      <button class="statusBtn btn btn-soft btn-primary text-gray-700">${reject.statusBtn}</button>
                    </div>

                    <p class="describe text-gray-500">${reject.describe}
                    </p>

                    <div class="space-x-2">
                       <button class="interBtn btn btn-outline btn-success">INTERVIEW</button>
                       <button class="rejectBtn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>

                <div>
                    <button class="deleteBtn btn btn-circle"><i class="fa-regular fa-trash-can"
                                style="color: rgb(42, 58, 85);"></i></button>
                </div>
           </div>

        `
        filterSection.appendChild(div);
    }
}