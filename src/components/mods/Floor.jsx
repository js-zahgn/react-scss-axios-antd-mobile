import React from 'react';

const Floor = (props) => (
  <div className="floor">
    <div className="title">{props.title}</div>
    <div className="floorAnomaly">
      <div className="floorOne" onClick={()=>props.goGoods(props.list[0].goodsId)}>
        <img src={props.list[0].image} alt="" width="100%"/>
      </div>
      <div>
        <div className="floorTwo" onClick={()=>props.goGoods(props.list[0].goodsId)}>
          <img src={props.list[1].image} alt="" width="100%"/>
        </div>
        <div className="floorThree" onClick={()=>props.goGoods(props.list[0].goodsId)}>
          <img src={props.list[2].image} alt="" width="100%"/>
        </div>
      </div>
    </div>
    <div className="floorRule">
      {
        props.list.slice(3).map(item=>(
          <div key={item.goodsId} onClick={()=>props.goGoods(item.goodsId)}>
            <img src={item.image} alt="" width="100%"/>
          </div>
        ))
      }
    </div>
  </div>
);

export default Floor;