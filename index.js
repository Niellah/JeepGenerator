// 在页面加载完成后执行
window.onload = function() {
    // 创建吉普车的图像元素
    var jeepImage = document.createElement('img');
    jeepImage.src = 'jeep_image.jpg';
    jeepImage.alt = '吉普车';
    jeepImage.style.width = '300px';

    // 创建吉普车的描述元素
    var jeepDescription = document.createElement('p');
    jeepDescription.textContent = '这是一辆漂亮的吉普车，准备好了冒险吗？';

    // 将吉普车图像和描述添加到页面中
    var jeepContainer = document.getElementById('jeepContainer');
    jeepContainer.appendChild(jeepImage);
    jeepContainer.appendChild(jeepDescription);
};
