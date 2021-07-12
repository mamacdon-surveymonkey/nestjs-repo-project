export class UserDto {
  readonly user_id: string;

  readonly metadata: {
    readonly is_migrated: boolean;
  };
}
