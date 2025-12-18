type User = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

type ReviewProps = {
  id: string | undefined;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export default ReviewProps;
