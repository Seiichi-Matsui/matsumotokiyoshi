// 「data-filter」を持つ要素（ボタン）を全て取得
const filterButtons = document.querySelectorAll('[data-filter]');

// 「data-category」を持つ要素（コンテンツ）をすべて取得
const categoryContents = document.querySelectorAll('[data-category]');

// 「data-filter」を持つ要素（ボタン）がクリックされた時に下記の2つ関数を実行
filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', buttonSwitch);
  filterButton.addEventListener('click', categoryFilter);
});

// ★関数ボタン部分の関数
function buttonSwitch() {
  // ボタンをクリックしたら全てのアクティブを解除して、クリックした要素をアクティブに変更
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove("is-active");
    this.classList.add('is-active');
  });
}

// ★コンテンツのフィルタの関数
function categoryFilter() {
  // クリックしたボタンのデータ属性の値を格納
  const buttonCategory = this.dataset.filter;
  // クリックしたボタンと同じ値のデータ属性をを持つコンテンツを格納
  const targetContents = document.querySelectorAll('[data-category="' + buttonCategory + '"]');

  // 「data-category」を持つ要素（コンテンツ）に対してイベント
  categoryContents.forEach((categoryContent) => {

    // ボタンクリック時のアニメーション（.is-activeが付いている要素にも適用させるためJavaScript内でcssを記述）
    categoryContent.animate([
      { opacity: 0 },
      { opacity: 1 }
    ],
      { duration: 600, fill: 'forwards' }
    );

    // クリックしたボタンがallの場合全てを表示
    if (buttonCategory == 'all') {
      categoryContent.classList.add('is-show');
    }

    // all以外の場合はクリックしたボタンと同じデータ属性の値を持つ要素をアクティブ
    else {
      // 一旦すべてアクティブ解除
      categoryContent.classList.remove("is-show");

      targetContents.forEach((targetContent) => {
        targetContent.classList.add('is-show');
      });
    }
  });
}