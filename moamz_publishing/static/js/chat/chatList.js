const personalChatBtn = document.getElementById('personal-chat-btn');
const groupChatBtn = document.getElementById('group-chat-btn');
const personalChatList = document.getElementById('personal-chat-list');
const groupChatList = document.getElementById('group-chat-list');

// 그룹채팅 버튼 누르면 -> 그룹채팅 버튼 active, 개인채팅 숨기기, 그룹채팅 보이기
groupChatBtn.addEventListener('click', function() {
    this.classList.add('active-btn');
    personalChatBtn.classList.remove('active-btn');
    groupChatList.classList.remove('chat-list-hidden');
    personalChatList.classList.add('chat-list-hidden');
});

personalChatBtn.addEventListener('click', function(){
    this.classList.add('active-btn');
    groupChatBtn.classList.remove('active-btn');
    personalChatList.classList.remove('chat-list-hidden');
    groupChatList.classList.add('chat-list-hidden');
});