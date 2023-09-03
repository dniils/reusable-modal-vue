const modalConfig = {
  purchaseSuccess: {
    id: 0,
    closeIcon: true,
    type: "success",
    windowTitle: "Спасибо за покупку!",
    title: "Покупка обрабатывается",
    text: "Оплата прошла успешно. Фишки будут зачислены на ваш счет в течение 5 минут.",
    button: { positive: { text: "Хорошо!" } },
    chipsAmout: "9,000M",
  },
  permanentBan: {
    id: 1,
    closeIcon: true,
    type: "error",
    windowTitle: "Бессрочная блокировка",
    title: "Ваш аккаунт заблокирован навсегда!",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae dolore similique sed asperiores! Laborum recusandae libero sapiente accusamus labore.",
    button: { neutral: { icon: "💬", text: "В поддержку" } },
  },
  newMilestone: {
    id: 2,
    closeIcon: true,
    windowTitle: "Новый этап",
    text: "Сыграйте 1 игру, чтобы получить очки рейтинга и занять место в новом этапе лиг.",
  },
};

export { modalConfig };
