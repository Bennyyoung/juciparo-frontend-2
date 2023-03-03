import laptop from "../../src/component/images/laptop.svg";
import couch from "../../src/component/images/couch.svg";
import shoes from "../../src/component/images/shoes.svg";
import phone from "../../src/component/images/phone.svg";
import laptop2 from "../../src/component/images/laptop2.svg";
import tv from "../../src/component/images/tv.svg";
import board from "../../src/component/images/board.svg";
import stool from "../../src/component/images/stool.svg";
import StarRating from "../../src/component/starrating/StarRating";

function Category() {
  return (
    <div className="grid h-screen place-items-center md:grid-cols-4 sm:grid-cols-2 grid-cols-1 pl-80 pr-80 sm:pl-10 sm:pr-10 ml-20 mr-20">
      <div class="h-80 bg-white-100 shadow-lg w-40">
        <div class="bg-red-500 w-20 rounded">
          <button class="text-white text-sm p-2">New</button>
        </div>
        <div class="p-1 -mt-1">
          <img src={laptop} alt="laptop" />
        </div>
        <div>
          <p class="text-sm text-left mx-2 mt-2">Adidas sport <br />sneakers</p>
        </div>
        <div class="flex flex mt-2">
          <p class="text-sm text-left mx-2">&#8358;<spna class="text-red-500">500</spna></p>
          <p class="text-sm text-left mx-2"><span class="line-through">&#8358;600</span></p>
        </div>
        <div class="flex mt-2">
          <StarRating />
        </div>
      </div>

      <div class="h-80 bg-white-100 shadow-lg w-40">
        <div class="bg-red-500 w-20 rounded">
          <button class="text-white text-sm p-2">New</button>
        </div>
        <div class="p-2 mt-12">
          <img src={couch} alt="couch" />
        </div>
        <div>
          <p class="text-sm text-left mx-2 mt-7">Adidas sport <br />sneakers</p>
        </div>
        <div class="flex flex mt-2">
          <p class="text-sm text-left mx-2">&#8358;<spna class="text-red-500">500</spna></p>
          <p class="text-sm text-left mx-2"><span class="line-through">&#8358;600</span></p>
        </div>
        <div class="flex mt-2">
          <StarRating />
        </div>        
      </div>

      <div class="h-80 bg-white-100 shadow-lg w-40">
        <div class="bg-red-500 w-20 rounded">
          <button class="text-white text-sm p-2">New</button>
        </div>
        <div class="p-2 mt-1">
          <img src={shoes} alt="shoes" />
        </div>
        <div>
          <p class="text-sm text-left mx-2 -mt-0.5">Adidas sport <br />sneakers</p>
        </div>
        <div class="flex flex mt-2">
          <p class="text-sm text-left mx-2">&#8358;<spna class="text-red-500">500</spna></p>
          <p class="text-sm text-left mx-2"><span class="line-through">&#8358;600</span></p>
        </div>
        <div class="flex mt-2">
          <StarRating />
        </div>
      </div>

      <div class="h-80 bg-white-100 shadow-lg w-40">
        <div class="bg-red-500 w-20 rounded">
          <button class="text-white text-sm p-2">New</button>
        </div>
        <div class="p-10 -mt-6">
          <img src={phone} alt="phone" />
        </div>
        <div>
          <p class="text-sm text-left mx-2 -mt-11">Adidas sport <br />sneakers</p>
        </div>
        <div class="flex flex mt-2">
          <p class="text-sm text-left mx-2">&#8358;<spna class="text-red-500">500</spna></p>
          <p class="text-sm text-left mx-2"><span class="line-through">&#8358;600</span></p>
        </div>
        <div class="flex mt-2">
          <StarRating />
        </div>
      </div>

      <div class="h-80 bg-white-100 shadow-lg w-40">
        <div class="bg-red-500 w-20 rounded">
          <button class="text-white text-sm p-2">New</button>
        </div>
        <div class="p-2 mt-3">
          <img src={laptop2} alt="laptop2" />
        </div>
        <div>
          <p class="text-sm text-left mx-2 -mt-2">Adidas sport <br />sneakers</p>
        </div>
        <div class="flex flex mt-2">
          <p class="text-sm text-left mx-2">&#8358;<spna class="text-red-500">500</spna></p>
          <p class="text-sm text-left mx-2"><span class="line-through">&#8358;600</span></p>
        </div>
        <div class="flex mt-2">
          <StarRating />
        </div>
      </div>

      <div class="h-80 bg-white-100 shadow-lg w-40">
        <div class="bg-red-500 w-20 rounded">
          <button class="text-white text-sm p-2">New</button>
        </div>
        <div class="mt-3">
          <img src={tv} alt="tv" />
        </div>
        <div>
          <p class="text-sm text-left mx-2 -mt-2">Adidas sport <br />sneakers</p>
        </div>
        <div class="flex flex mt-2">
          <p class="text-sm text-left mx-2">&#8358;<spna class="text-red-500">500</spna></p>
          <p class="text-sm text-left mx-2"><span class="line-through">&#8358;600</span></p>
        </div>
        <div class="flex mt-2">
          <StarRating />
        </div>
      </div>

      <div class="h-80 bg-white-100 shadow-lg w-40">
        <div class="bg-red-500 w-20 rounded">
          <button class="text-white text-sm p-2">New</button>
        </div>
        <div class="p-2 mt-1.5">
          <img src={board} alt="board" />
        </div>
        <div>
          <p class="text-sm text-left mx-2 mt-7">Adidas sport <br />sneakers</p>
        </div>
        <div class="flex flex mt-2">
          <p class="text-sm text-left mx-2">&#8358;<spna class="text-red-500">500</spna></p>
          <p class="text-sm text-left mx-2"><span class="line-through">&#8358;600</span></p>
        </div>
        <div class="flex mt-2">
          <StarRating />
        </div>
      </div>

      <div class="h-80 bg-white-100 shadow-lg w-40">
        <div class="bg-red-500 w-20 rounded">
          <button class="text-white text-sm p-2">New</button>
        </div>
        <div class=" mt-2">
          <img src={stool} alt="stool" />
        </div>
        <div>
          <p class="text-sm text-left mx-2 -mt-1">Adidas sport <br />sneakers</p>
        </div>
        <div class="flex flex mt-2">
          <p class="text-sm text-left mx-2">&#8358;<spna class="text-red-500">500</spna></p>
          <p class="text-sm text-left mx-2"><span class="line-through">&#8358;600</span></p>
        </div>
        <div class="flex mt-2">
          <StarRating />
        </div>
      </div>
    </div>
  );
}

export default Category;
