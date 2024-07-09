// Fetch JSON data (assuming it's stored locally for simplicity)
const PotentailData = [
    {
        "img": "https://i.ibb.co/JRFmhpf/Group.png"
    },
    {
        "img": "https://i.ibb.co/JyWqbqP/Group-227.png"
    },
    {
        "img": "https://i.ibb.co/1my2xPY/Group-226.png"
    },
    {
        "img": "https://i.ibb.co/d0XnMqp/Group-225.png"
    },
    {
        "img": "https://i.ibb.co/cbPwTsW/Group-224.png"
    },
    {
        "img": "https://i.ibb.co/TL4SbQL/Group-223.png"
    },
    {
        "img": "https://i.ibb.co/dJByh3T/Group-222.png"
    },
    {
        "img": "https://i.ibb.co/Cmsd7yN/Group-221.png"
    },
    {
        "img": "https://i.ibb.co/gSk42hh/Group-220.png"
    },
    {
        "img": "https://i.ibb.co/yh6h43J/Group-219.png"
    }
];
const Companies = [

    {
        "img": "https://i.ibb.co/GHF2pBt/Vector.png"
    },
    {
        "img": "https://i.ibb.co/TTmNqQm/ss-logo-2color-black-1.png"
    },
    {
        "img": "https://i.ibb.co/qp5WgFq/nota-bene-logo-1.png"
    },
    {
        "img": "https://i.ibb.co/cvGb4LP/quovo-logo.png"
    },
    {
        "img": "https://i.ibb.co/ftMmfk5/Recurly-Logo-Purple-1.png"
    },
    {
        "img": "https://i.ibb.co/KybZhRs/image-55.png"
    },
    {
        "img": "https://i.ibb.co/Jy3gK4N/image-67-removebg-preview.png"
    },
    {
        "img": "https://i.ibb.co/gJ544pf/kensho-social-card-2.png"
    },
    {
        "img": "https://i.ibb.co/chqmNmY/image-52.png"
    },
    {
        "img": "https://i.ibb.co/4SrV0G2/image-54.png"
    },
    {
        "img": "https://i.ibb.co/KybZhRs/image-55.png"
    },
    {
        "img": "https://i.ibb.co/VjjfLxM/Group-169.png"
    },
    {
        "img": "https://i.ibb.co/BgjfRjb/image-50.png"
    },
    {
        "img": "https://i.ibb.co/MVyRD4S/image-51.png"
    },
    {
        "img": "https://i.ibb.co/k03dqvR/e92716bf-074b-46c2-bfdc-82dbfae1da06-2.png"
    },
    {
        "img": "https://i.ibb.co/W2HQHQw/flywire.png"
    },
    {
        "img": "https://i.ibb.co/V2c8X7f/Group-166.png"
    },
    {
        "img": "https://i.ibb.co/9WNvnq2/62e84990058cefbfc33ef312-vendr-logo-1.png"
    },
    {
        "img": "https://i.ibb.co/VTHp4cK/ae99cd49-2667-464e-b9db-b39cee0126e1-1.png"
    },
    {
        "img": "https://i.ibb.co/Wt7CDHQ/argyle-black-l-2-removebg-preview.png"
    }
];
 const Storiesdata = [
    {
        "img": "https://i.ibb.co/8KN1G73/image-98.png",
        "Name": "By: Sahabuddin Sagor",
        "des":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
    },
    {
        "img": "https://i.ibb.co/6tZn9JL/image-97.png",
        "Name": "By: Nayem Khan",
        "des":"Key Takeaways from Robotics Invest 2023"
    },
    {
        "img": "https://i.ibb.co/8KN1G73/image-98.png",
        "Name": "By: Sahabuddin Sagor",
        "des":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
    },
    {
        "img": "https://i.ibb.co/6tZn9JL/image-97.png",
        "Name": "By: Nayem Khan",
        "des":"Key Takeaways from Robotics Invest 2023."
    },
    {
        "img": "https://i.ibb.co/8KN1G73/image-98.png",
        "Name": "By: Sahabuddin Sagor",
        "des":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
    },
    {
        "img": "https://i.ibb.co/6tZn9JL/image-97.png",
        "Name": "By: Nayem Khan",
        "des":"Key Takeaways from Robotics Invest 2023."
    },
]
let companiesData = [
    {
        Company: "Company A",
        Ticker: "TickerA",
        Vertical: "Technology",
        Price: 100.25,
        Market: 250,
        Revenue: 0.15,
        Gross: 0.6,
        Revenues: 5.2,
        YTD: 0.05
    },
    {
        Company: "Company A",
        Ticker: "TickerA",
        Vertical: "Technology",
        Price: 100.25,
        Market: 250,
        Revenue: 0.15,
        Gross: 0.6,
        Revenues: 5.2,
        YTD: 0.05
    },
    {
        Company: "Company A",
        Ticker: "TickerA",
        Vertical: "Technology",
        Price: 100.25,
        Market: 250,
        Revenue: 0.15,
        Gross: 0.6,
        Revenues: 5.2,
        YTD: 0.05
    },
    {
        Company: "Company A",
        Ticker: "TickerA",
        Vertical: "Technology",
        Price: 100.25,
        Market: 250,
        Revenue: 0.15,
        Gross: 0.6,
        Revenues: 5.2,
        YTD: 0.05
    },
    {
        Company: "Company A",
        Ticker: "TickerA",
        Vertical: "Technology",
        Price: 100.25,
        Market: 250,
        Revenue: 0.15,
        Gross: 0.6,
        Revenues: 5.2,
        YTD: 0.05
    },
    {
        Company: "Company A",
        Ticker: "TickerA",
        Vertical: "Technology",
        Price: 100.25,
        Market: 250,
        Revenue: 0.15,
        Gross: 0.6,
        Revenues: 5.2,
        YTD: 0.05
    }
  
];


// Function to create image cards
function createImageCards() {
    const alldatasContainer = document.getElementById('alldatas');
    PotentailData.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'bg-[#FFFFFF] rounded-[6px] h-[120px]  flex flex-col justify-center items-center shadow-md';
        const img = document.createElement('img');
        img.className = 'object-fill';
        img.src = item.img;
        img.alt = 'Image';
        card.appendChild(img);
        alldatasContainer.appendChild(card);
    });
}

function createPortfoiloCards() {
    const PortfoiloContainer = document.getElementById('Portfoilo');
    Companies.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'bg-[#FFFFFF] rounded-[6px] h-[120px]  flex flex-col justify-center items-center shadow-md';
        const img = document.createElement('img');
        img.className = 'object-fill';
        img.src = item.img;
        img.alt = `Image ${i}`;
        card.appendChild(img);
        PortfoiloContainer.appendChild(card);
    });
}
function createStoriesCards() {
    const storiesContainer = document.getElementById('stories');
    let html = '';

    Storiesdata.forEach((item) => {
        html += `
            <div class="rounded-[8px] relative bg-[#FFFFFF]">
                <img src="${item.img}" alt="Image" class="object-fill absolute -top-12 left-2">
                <div class="text-white p-[19px]">
               <p class="text-[#2042B6] text-[14px] ${item.Name === 'By: Nayem Khan' ? 'mt-[90px]' : 'mt-16'}">${item.Name}</p>
                <p class=" text-[#191618]">${item.des}</p>
                    <button class="rounded-2xl mt-3 bg-[#2042B6] text-[#fff] py-[6px] px-3">Read More</button>
                </div>
            </div>
        `;
    });

    storiesContainer.innerHTML = html;
}
function renderCandidateTable() {
    const candidateTableBody = document.getElementById('candidateTableBody');
    let html = '';

    companiesData.forEach((item, index) => {
        html += `
            <tr class="${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}">
                <td class="px-5 py-3">${item.Company}</td>
                <td class="">${item.Ticker}</td>
                <td class="">${item.Vertical}</td>
                <td class="">${item.Price}</td>
                <td class="">${item.Market}</td>
                <td class="">${item.Revenue}</td>
                <td class="">${item.Gross}</td>
                <td class="">${item.Revenues}</td>
                <td class="">${item.YTD}</td>
            </tr>
        `;
    });

    candidateTableBody.innerHTML = html;
}

// Call function to create image cards when page loads
window.onload = createImageCards;
window.onload = createStoriesCards;
window.onload = createPortfoiloCards;
window.onload = renderCandidateTable;
