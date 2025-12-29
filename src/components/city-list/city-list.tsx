import { CityType } from '../../types/city-type.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import {changeCityAction, fillOfferListAction, chooseSortingOptionsAction} from '../../store/action.ts';
import { VariantsSorting } from '../constants/variants-sorting/variants-sorting.tsx';
import {memo} from 'react';


type CityListProps = {
  cities: CityType[];
}

function CityList({cities}: CityListProps) {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.offers.city);
  const nameOfCities = cities.map((city) => city.name);
  const dispatch = useAppDispatch();
  const handleCityClick = (nameCity: CityType['name']) => {
    const chooseCity = cities.filter((city: CityType) => city.name === nameCity)[0];

    dispatch(changeCityAction(chooseCity));
    dispatch(fillOfferListAction(offers.offers.filter((offer) => offer.city.name === chooseCity.name)));
    dispatch(chooseSortingOptionsAction(VariantsSorting.POPULAR));
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

const MemoCityList = memo(CityList);
export default MemoCityList;
