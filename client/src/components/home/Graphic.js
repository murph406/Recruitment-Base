import { BasketballGraphic, BasketballGraphic3 } from '../../assets/icons/svg-paths'


export const Graphic = () => {
    return (
      <div className="home-graphic ">
        <div className="bb-graphic">
          <BasketballGraphic3
            backgroundColor={'#fff'}
            textBlock1={'Fundamentals'}
            textBlock2={'Mixed with'}
            textBlock3={"Sauce"}
          />
        </div>
      </div>
    )
  }