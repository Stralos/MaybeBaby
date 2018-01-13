// @flow
declare type Employee = {
  name: string,
  image?: string,
  description: string,
  profession: string,
};

declare type EmployeeWithInitials = Employee & {
  initials: string,
}
