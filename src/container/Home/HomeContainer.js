import React from "react";
import Home from "../../components/Home/Home";
import Product from "./ProductContainer";

function HeaderContainer() {
	return (
		<Home>
			<Home.Wrapper>
				<Home.Image src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg' />
				<Home.Row>
					<Product
						id='1'
						title="U-TURN Men's Cotton Short Kurta"
						price={438.00}
						img='https://images-na.ssl-images-amazon.com/images/I/71peHvQaWkL._UY741_.jpg'
						rating={3}
					/>
					<Product
						id='2'
						title="Krishna Enterprise Women's Banarasi Jacquard Unstitched Salwar Suit Dress Material (Free Size, Sky Blue)"
						price={899.00}
						img='https://images-na.ssl-images-amazon.com/images/I/81RwAfFh1SL._UX679_.jpg'
						rating={4}
					/>
				</Home.Row>
				<Home.Row>
					<Product
						id='3'
						title='Samsung Galaxy M31s (Mirage Blue, 8GB RAM, 128GB Storage)'
						price={21499.00}
						img="https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SY679_.jpg"
						rating={4}
					/>
					<Product
						id='4'
						title='TORIOX ABS Pet Fur, Hair and Lint Remover with Self-Cleaning Base Double-Sided Brush Removes Dog and Cat Hairs from Clothes and Furniture (Blue and White)'
						price={489.00}
						img='https://images-na.ssl-images-amazon.com/images/I/61e0%2Bvx2KNL._SX679_.jpg'
						rating={4}
					/>
					<Product
						id='5'
						title="ORICO 7 Channels Cable Organizer Cord Manager Wire Cord Holder for Power Cords and Charging Accessory Cables, Mouse Cable, PC, Office and Home"
						price={339.00}
						img='https://images-na.ssl-images-amazon.com/images/I/81Hrgazx1FL._SX522_.jpg'
						rating={4}
					/>
				</Home.Row>
				<Home.Row>
					<Product
						id='6'
						title="LG 164 cm (65 inches) 4K Ultra HD Smart IPS LED TV 65UM7290PTD (Ceramic Black) (2020 Model)"
						price={82990.00}
						img='https://images-na.ssl-images-amazon.com/images/I/71SCFpCWGrL._SX679_.jpg'
						rating={4}
					/>
				</Home.Row>
			</Home.Wrapper>
		</Home>
	);
}

export default HeaderContainer;
