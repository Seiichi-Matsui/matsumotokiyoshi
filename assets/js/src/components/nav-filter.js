// 「data-filter」を持つ要素（ボタン）を全て取得
const filterButtons = document.querySelectorAll('[data-filter]');

// 「data-navFilter」を持つ要素（コンテンツ）をすべて取得
const categoryContents = document.querySelectorAll('[data-navFilter]');

// 「data-filterProducts」を持つ要素（コンテンツ）をすべて取得
const products = document.querySelectorAll('[data-filterProducts]');

// 「data-NavItemCategoty」を持つ要素（コンテンツ）をすべて取得
const NavItemCategories = document.querySelectorAll('[data-NavItemCategoty]');

// 「data-filterProduct」を持つ要素（コンテンツ）をすべて取得
const itemCategories = document.querySelectorAll('[data-filterItemCategory]');

// 「all-products」を持つ要素（コンテンツ）をすべて取得
const allProducts = document.querySelectorAll('.all-products');

// 「data-filter」を持つ要素（ボタン）がクリックされた時に下記の2つ関数を実行
filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', buttonSwitch);
  filterButton.addEventListener('click', categoryFilter);
//   console.log(filterButton);
});

// 「data-navFilter」を持つ要素（ボタン）がクリックされた時に下記の2つ関数を実行
NavItemCategories.forEach((NavItemCategory) => {
    NavItemCategory.addEventListener('click', buttonSwitchNav);
    NavItemCategory.addEventListener('click', categoryFilterNav);
    // console.log(NavItemCategory);
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
  const targetContents = document.querySelectorAll('[data-navFilter="' + buttonCategory + '"]');
  const targetProducts = document.querySelectorAll('[data-filterProducts="' + buttonCategory + '"]');

  // 「data-category」を持つ要素（コンテンツ）に対してイベント
  categoryContents.forEach((categoryContent) => {

    // ボタンクリック時のアニメーション（.is-activeが付いている要素にも適用させるためJavaScript内でcssを記述）
    categoryContent.animate([
      { opacity: 0 },
      { opacity: 1 }
    ],
      { duration: 600, fill: 'forwards' }
    );

    // 全てのカテゴリーを表示とallボタンをactivに
    allProducts.forEach((product) => {
        console.log(product);
        product.classList.add('is-activ');
    });
    NavItemCategories.forEach((itemCategory) => {
    const navitemcategoty = itemCategory.dataset.navitemcategoty;

    itemCategories.forEach((itemCategory) => {
        itemCategory.classList.add('is-show');
    });

    if (navitemcategoty == 'all') {
        itemCategory.classList.add('is-active');
    //   console.log(itemCategory);
    } else {
        itemCategory.classList.remove('is-active');
    }
    });

    // クリックしたボタンがallの場合全てを表示
    if (buttonCategory == 'all') {
      categoryContent.classList.remove('is-show');
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

  // 「filterProducts」を持つ要素（コンテンツ）に対してイベント
  products.forEach((product) => {

    // ボタンクリック時のアニメーション（.is-activeが付いている要素にも適用させるためJavaScript内でcssを記述）
    product.animate([
      { opacity: 0 },
      { opacity: 1 }
    ],
      { duration: 600, fill: 'forwards' }
    );

    // クリックしたボタンがallの場合全てを表示
    if (buttonCategory == 'all') {
        product.classList.add('is-show');
    }

    // all以外の場合はクリックしたボタンと同じデータ属性の値を持つ要素をアクティブ
    else {
      // 一旦すべてアクティブ解除
      product.classList.remove("is-show");

      targetProducts.forEach((targetProduct) => {
        targetProduct.classList.add('is-show');
      });
    }
  });

  // 「filterProduct」を持つ要素（コンテンツ）に対してイベント
//   itemCategories.forEach((itemCategory) => {

//     // ボタンクリック時のアニメーション（.is-activeが付いている要素にも適用させるためJavaScript内でcssを記述）
//     itemCategory.animate([
//       { opacity: 0 },
//       { opacity: 1 }
//     ],
//       { duration: 600, fill: 'forwards' }
//     );

//     // クリックしたボタンがallの場合全てを表示
//     if (buttonCategory == 'all') {
//         itemCategory.classList.add('is-show');
//     }

//     // all以外の場合はクリックしたボタンと同じデータ属性の値を持つ要素をアクティブ
//     else {
//       // 一旦すべてアクティブ解除
//       itemCategory.classList.remove("is-show");

//       targetItemCategories.forEach((targetItemCategory) => {
//         targetItemCategory.classList.add('is-show');
//       });
//     }
//   });
}



// ★関数ボタン部分の関数
function buttonSwitchNav() {
    // ボタンをクリックしたら全てのアクティブを解除して、クリックした要素をアクティブに変更
    NavItemCategories.forEach((filterButton) => {
      filterButton.classList.remove("is-active");
      this.classList.add('is-active');
    });
  }
// ★NavFilterのフィルタの関数
function categoryFilterNav() {
    // クリックしたボタンのデータ属性の値を格納
    const buttonCategory = this.dataset.navitemcategoty;
    // クリックしたボタンと同じ値のデータ属性をを持つコンテンツを格納
    const targetItemCategories = document.querySelectorAll('[data-filterItemCategory="' + buttonCategory + '"]');
  
    // 「data-category」を持つ要素（コンテンツ）に対してイベント
    itemCategories.forEach((itemCategory) => {
  
      // ボタンクリック時のアニメーション（.is-activeが付いている要素にも適用させるためJavaScript内でcssを記述）
      itemCategory.animate([
        { opacity: 0 },
        { opacity: 1 }
      ],
        { duration: 600, fill: 'forwards' }
      );
  
    //   console.log(buttonCategory);
      // クリックしたボタンがallの場合全てを表示
      if (buttonCategory == 'all') {
        itemCategory.classList.add('is-show');
      }
  
      // all以外の場合はクリックしたボタンと同じデータ属性の値を持つ要素をアクティブ
      else {
        // 一旦すべてアクティブ解除
        itemCategory.classList.remove("is-show");
  
        targetItemCategories.forEach((targetItemCategory) => {
            targetItemCategory.classList.add('is-show');
        });
      }
    });
  
  }