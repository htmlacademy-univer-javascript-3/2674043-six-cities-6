import { CityType } from '../../types/city-type.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import {changeCityAction, fillOfferListAction} from '../../store/action.ts';
import { offers } from '../../mocks/offer.ts';


type CityListProps = {
  cities: CityType[];
}

function CityList({cities}: CityListProps) {
  const currentCity = useAppSelector((state) => state.city);
  const nameOfCities = cities.map((city) => city.name);
  const dispatch = useAppDispatch();
  const handleCityClick = (nameCity: CityType['name']) => {
    const chooseCity = cities.filter((city: CityType) => city.name === nameCity)[0];

    dispatch(changeCityAction(chooseCity));
    dispatch(fillOfferListAction(offers.filter((offer) => offer.city.name === nameCity)));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {nameOfCities.map((nameCity) => (
            <li key={nameCity} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${
                  currentCity.name === nameCity ? 'tabs__item--active' : ''
                }`}
                // href="#"
                onClick={() => {
                  handleCityClick(nameCity);
                }}
              >
                <span>{nameCity}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
