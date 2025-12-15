import { useAppSelector } from '../../hooks/index.tsx';
import { useAppDispatch } from '../../hooks/index.tsx';
import { VariantsSorting } from '../constants/variants-sorting/variants-sorting.tsx';
import { chooseSortingOptionsAction } from '../../store/action.ts';

function SortingOption(): JSX.Element {
  const currentOption = useAppSelector((state) => state.sortingOption);
  const dispatch = useAppDispatch();
  const sortingOptions = Object.values(VariantsSorting);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          sortingOptions.map((option) => (
            <li
              key={option}
              className={`places__option ${option === currentOption ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => dispatch(chooseSortingOptionsAction(option))}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default SortingOption;
