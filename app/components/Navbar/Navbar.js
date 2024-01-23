import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-white p-6 shadow-xl">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            width="162"
            height="46"
            viewBox="0 0 162 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 45C37.1503 45 47 35.1503 47 23C47 10.8497 37.1503 1 25 1C12.8497 1 3 10.8497 3 23C3 35.1503 12.8497 45 25 45Z"
              fill="black"
            />
            <path
              d="M25.7837 6.50966C22.0684 6.38058 18.4217 7.53257 15.4548 9.77253C15.1671 9.98874 14.9311 10.2662 14.7639 10.5849C14.5967 10.9035 14.5024 11.2553 14.488 11.6149C14.4735 11.9745 14.5391 12.3327 14.6802 12.6638C14.8212 12.9949 15.0342 13.2904 15.3035 13.529C16.1588 14.3375 17.476 14.4008 18.4055 13.6789C20.6815 11.9076 23.5387 11.0536 26.4134 11.2852C29.2881 11.5168 31.9717 12.8173 33.9347 14.9302C34.746 15.7689 34.7708 17.0903 33.9925 17.9593C33.7969 18.1691 33.5619 18.3383 33.3009 18.4572C33.0398 18.5762 32.7579 18.6425 32.4713 18.6525C32.1846 18.6624 31.8988 18.6158 31.6302 18.5153C31.3615 18.4147 31.1153 18.2622 30.9056 18.0665L30.7998 17.9593C29.8209 16.8859 28.5403 16.1336 27.1261 15.8012C25.7119 15.4688 24.2303 15.5718 22.8757 16.0967C21.5212 16.6216 20.357 17.5438 19.5361 18.7424C18.7151 19.9409 18.2758 21.3596 18.2758 22.8123C18.2758 24.2651 18.7151 25.6838 19.5361 26.8823C20.357 28.0809 21.5212 29.0031 22.8757 29.528C24.2303 30.0529 25.7119 30.1559 27.1261 29.8235C28.5403 29.4911 29.8209 28.7388 30.7998 27.6654C31.1133 27.3145 31.5338 27.0768 31.9962 26.989C32.4585 26.9013 32.9369 26.9684 33.3572 27.18C33.6563 27.33 33.9166 27.5471 34.1178 27.8144C34.3191 28.0816 34.4558 28.3918 34.5173 28.7206C34.5788 29.0494 34.5634 29.388 34.4724 29.7099C34.3813 30.0319 34.2171 30.3284 33.9925 30.5763C32.0375 32.7163 29.3505 34.0446 26.463 34.2982C23.5755 34.5518 20.6981 33.7123 18.4 31.9458C17.9453 31.5993 17.3828 31.4245 16.8118 31.4522C16.2408 31.4799 15.6979 31.7082 15.2788 32.097C15.0112 32.3422 14.8013 32.6436 14.6641 32.9796C14.527 33.3156 14.466 33.6778 14.4856 34.0402C14.5052 34.4026 14.6049 34.7561 14.7775 35.0754C14.95 35.3946 15.1912 35.6716 15.4836 35.8865C17.5347 37.4076 19.9144 38.4254 22.4311 38.8579C24.9477 39.2903 27.5307 39.1254 29.9719 38.3763C32.4131 37.6272 34.644 36.3149 36.4849 34.5452C38.3258 32.7756 39.725 30.5981 40.5698 28.1884C41.4147 25.7787 41.6814 23.2042 41.3485 20.6725C41.0157 18.1408 40.0925 15.7227 38.6536 13.6132C37.2146 11.5038 35.3 9.76201 33.0643 8.52835C30.8286 7.2947 28.3342 6.60368 25.7824 6.51103L25.7837 6.50966ZM25.4813 26.8432C24.9516 26.8412 24.4276 26.7349 23.9391 26.5304C23.4506 26.3259 23.0071 26.0272 22.634 25.6513C22.2609 25.2754 21.9655 24.8297 21.7647 24.3396C21.5639 23.8496 21.4615 23.3248 21.4635 22.7952C21.4655 22.2656 21.5718 21.7415 21.7763 21.253C21.9808 20.7645 22.2795 20.321 22.6554 19.9479C23.0313 19.5748 23.477 19.2794 23.967 19.0786C24.4571 18.8778 24.9819 18.7754 25.5115 18.7774C26.5811 18.7812 27.6053 19.2098 28.3589 19.9688C29.1125 20.7278 29.5338 21.7551 29.5299 22.8247C29.5261 23.8943 29.0975 24.9186 28.3385 25.6722C27.5795 26.4258 26.5522 26.847 25.4826 26.8432H25.4813Z"
              fill="white"
            />
            <path
              d="M56.0816 23.2C56.0816 21.2773 56.5109 19.56 57.3696 18.048C58.2469 16.5173 59.4322 15.332 60.9256 14.492C62.4376 13.6333 64.1269 13.204 65.9936 13.204C68.1776 13.204 70.0909 13.764 71.7336 14.884C73.3762 16.004 74.5242 17.5533 75.1776 19.532H70.6696C70.2216 18.5987 69.5869 17.8987 68.7656 17.432C67.9629 16.9653 67.0296 16.732 65.9656 16.732C64.8269 16.732 63.8096 17.0027 62.9136 17.544C62.0362 18.0667 61.3456 18.8133 60.8416 19.784C60.3562 20.7547 60.1136 21.8933 60.1136 23.2C60.1136 24.488 60.3562 25.6267 60.8416 26.616C61.3456 27.5867 62.0362 28.3427 62.9136 28.884C63.8096 29.4067 64.8269 29.668 65.9656 29.668C67.0296 29.668 67.9629 29.4347 68.7656 28.968C69.5869 28.4827 70.2216 27.7733 70.6696 26.84H75.1776C74.5242 28.8373 73.3762 30.396 71.7336 31.516C70.1096 32.6173 68.1962 33.168 65.9936 33.168C64.1269 33.168 62.4376 32.748 60.9256 31.908C59.4322 31.0493 58.2469 29.864 57.3696 28.352C56.5109 26.84 56.0816 25.1227 56.0816 23.2ZM80.5138 15.64C79.8231 15.64 79.2444 15.4253 78.7778 14.996C78.3298 14.548 78.1058 13.9973 78.1058 13.344C78.1058 12.6907 78.3298 12.1493 78.7778 11.72C79.2444 11.272 79.8231 11.048 80.5138 11.048C81.2044 11.048 81.7738 11.272 82.2218 11.72C82.6884 12.1493 82.9218 12.6907 82.9218 13.344C82.9218 13.9973 82.6884 14.548 82.2218 14.996C81.7738 15.4253 81.2044 15.64 80.5138 15.64ZM82.4458 17.488V33H78.5258V17.488H82.4458ZM92.2547 33.252C90.9854 33.252 89.8467 33.028 88.8387 32.58C87.8307 32.1133 87.0281 31.488 86.4307 30.704C85.8521 29.92 85.5347 29.052 85.4787 28.1H89.4267C89.5014 28.6973 89.7907 29.192 90.2947 29.584C90.8174 29.976 91.4614 30.172 92.2267 30.172C92.9734 30.172 93.5521 30.0227 93.9627 29.724C94.3921 29.4253 94.6067 29.0427 94.6067 28.576C94.6067 28.072 94.3454 27.6987 93.8227 27.456C93.3187 27.1947 92.5067 26.9147 91.3867 26.616C90.2294 26.336 89.2774 26.0467 88.5307 25.748C87.8027 25.4493 87.1681 24.992 86.6267 24.376C86.1041 23.76 85.8427 22.9293 85.8427 21.884C85.8427 21.0253 86.0854 20.2413 86.5707 19.532C87.0747 18.8227 87.7841 18.2627 88.6987 17.852C89.6321 17.4413 90.7241 17.236 91.9747 17.236C93.8227 17.236 95.2974 17.7027 96.3987 18.636C97.5001 19.5507 98.1067 20.792 98.2187 22.36H94.4667C94.4107 21.744 94.1494 21.2587 93.6827 20.904C93.2347 20.5307 92.6281 20.344 91.8627 20.344C91.1534 20.344 90.6027 20.4747 90.2107 20.736C89.8374 20.9973 89.6507 21.3613 89.6507 21.828C89.6507 22.3507 89.9121 22.752 90.4347 23.032C90.9574 23.2933 91.7694 23.564 92.8707 23.844C93.9907 24.124 94.9147 24.4133 95.6427 24.712C96.3707 25.0107 96.9961 25.4773 97.5187 26.112C98.0601 26.728 98.3401 27.5493 98.3587 28.576C98.3587 29.472 98.1067 30.2747 97.6027 30.984C97.1174 31.6933 96.4081 32.2533 95.4747 32.664C94.5601 33.056 93.4867 33.252 92.2547 33.252ZM115.997 24.908C115.997 25.468 115.959 25.972 115.885 26.42H104.545C104.638 27.54 105.03 28.4173 105.721 29.052C106.411 29.6867 107.261 30.004 108.269 30.004C109.725 30.004 110.761 29.3787 111.377 28.128H115.605C115.157 29.6213 114.298 30.8533 113.029 31.824C111.759 32.776 110.201 33.252 108.353 33.252C106.859 33.252 105.515 32.9253 104.321 32.272C103.145 31.6 102.221 30.6573 101.549 29.444C100.895 28.2307 100.569 26.8307 100.569 25.244C100.569 23.6387 100.895 22.2293 101.549 21.016C102.202 19.8027 103.117 18.8693 104.293 18.216C105.469 17.5627 106.822 17.236 108.353 17.236C109.827 17.236 111.143 17.5533 112.301 18.188C113.477 18.8227 114.382 19.728 115.017 20.904C115.67 22.0613 115.997 23.396 115.997 24.908ZM111.937 23.788C111.918 22.78 111.554 21.9773 110.845 21.38C110.135 20.764 109.267 20.456 108.241 20.456C107.27 20.456 106.449 20.7547 105.777 21.352C105.123 21.9307 104.722 22.7427 104.573 23.788H111.937ZM117.85 25.244C117.85 23.6387 118.176 22.2387 118.83 21.044C119.483 19.8307 120.388 18.8973 121.546 18.244C122.703 17.572 124.028 17.236 125.522 17.236C127.444 17.236 129.031 17.7213 130.282 18.692C131.551 19.644 132.4 20.988 132.83 22.724H128.602C128.378 22.052 127.995 21.5293 127.454 21.156C126.931 20.764 126.278 20.568 125.494 20.568C124.374 20.568 123.487 20.9787 122.834 21.8C122.18 22.6027 121.854 23.7507 121.854 25.244C121.854 26.7187 122.18 27.8667 122.834 28.688C123.487 29.4907 124.374 29.892 125.494 29.892C127.08 29.892 128.116 29.1827 128.602 27.764H132.83C132.4 29.444 131.551 30.7787 130.282 31.768C129.012 32.7573 127.426 33.252 125.522 33.252C124.028 33.252 122.703 32.9253 121.546 32.272C120.388 31.6 119.483 30.6667 118.83 29.472C118.176 28.2587 117.85 26.8493 117.85 25.244ZM142.59 33.252C141.096 33.252 139.752 32.9253 138.558 32.272C137.363 31.6 136.42 30.6573 135.73 29.444C135.058 28.2307 134.722 26.8307 134.722 25.244C134.722 23.6573 135.067 22.2573 135.758 21.044C136.467 19.8307 137.428 18.8973 138.642 18.244C139.855 17.572 141.208 17.236 142.702 17.236C144.195 17.236 145.548 17.572 146.762 18.244C147.975 18.8973 148.927 19.8307 149.618 21.044C150.327 22.2573 150.682 23.6573 150.682 25.244C150.682 26.8307 150.318 28.2307 149.59 29.444C148.88 30.6573 147.91 31.6 146.678 32.272C145.464 32.9253 144.102 33.252 142.59 33.252ZM142.59 29.836C143.299 29.836 143.962 29.668 144.578 29.332C145.212 28.9773 145.716 28.4547 146.09 27.764C146.463 27.0733 146.65 26.2333 146.65 25.244C146.65 23.7693 146.258 22.64 145.474 21.856C144.708 21.0533 143.766 20.652 142.646 20.652C141.526 20.652 140.583 21.0533 139.818 21.856C139.071 22.64 138.698 23.7693 138.698 25.244C138.698 26.7187 139.062 27.8573 139.79 28.66C140.536 29.444 141.47 29.836 142.59 29.836ZM155.293 33.196C154.584 33.196 153.996 32.9813 153.529 32.552C153.081 32.104 152.857 31.5533 152.857 30.9C152.857 30.2467 153.081 29.7053 153.529 29.276C153.996 28.828 154.584 28.604 155.293 28.604C155.984 28.604 156.553 28.828 157.001 29.276C157.449 29.7053 157.673 30.2467 157.673 30.9C157.673 31.5533 157.449 32.104 157.001 32.552C156.553 32.9813 155.984 33.196 155.293 33.196Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center   lg:w-auto">
          <div class="text-sm lg:flex-grow  lg:text-center text-[#334155] text-[15px]">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4 py-3 px-6 hover:bg-[#334155]/10 hover:rounded-full"
            >
              Men
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4  py-3 px-6 hover:bg-[#334155]/10 hover:rounded-full"
            >
              Women
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0   py-3 px-6 hover:bg-[#334155]/10 hover:rounded-full"
            >
              Beauty
            </a>

            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0   py-3 px-6 hover:bg-[#334155]/10 hover:rounded-full"
            >
              Sport
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0   py-3 px-6 hover:bg-[#334155]/10 hover:rounded-full"
            ></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
