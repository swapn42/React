import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/-1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export function User() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {(error as Error).message}</p>}
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
      <p>{data?.phone}</p>
    </div>
  );
}
