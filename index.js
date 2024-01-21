const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const  darkmode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkmode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkmode.querySelector('span:nth-child(2)').classList.toggle('active');
})
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.productStatus}</td>
    <td class ="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
    <td class="primary">Detatils</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});