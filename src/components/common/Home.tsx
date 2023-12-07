import ProductList from "../domain/product/list/ProductList";

import classes from "./Home.module.css";

const Home = () => {
  // 임시 위치 상태 -> 여긴 setLocation이 필요없는 컴폰너트
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return (
    <div className={classes.container}>
      <div className={classes["map-box"]}>
      </div>

      <ProductList />
    </div>
  );
};

export default Home;
