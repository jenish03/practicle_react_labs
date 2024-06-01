import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface user {
  username: string;
  address: string;
  email: string;
  phone: string;
  userId: string;
}

export function UserDetails() {
  const usersData: user[] = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users") as string)
    : [];

  return (
    <>
      {usersData?.length > 0 ? (
        <Table>
          <TableCaption>A list of registered users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData?.map((user: user) => (
              <TableRow key={user.userId}>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell className="text-right">{user.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <TableCaption>No registered users found.</TableCaption>
      )}
    </>
  );
}
