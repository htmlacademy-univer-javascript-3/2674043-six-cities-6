type User = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

type ReviewProps = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export default ReviewProps;
