import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  bytea: any;
  date: any;
  money: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** columns and relationships of "conferences" */
export type Conferences = {
  __typename?: 'conferences';
  date: Scalars['date'];
  name: Scalars['String'];
  place: Scalars['String'];
};

/** aggregated selection of "conferences" */
export type Conferences_Aggregate = {
  __typename?: 'conferences_aggregate';
  aggregate?: Maybe<Conferences_Aggregate_Fields>;
  nodes: Array<Conferences>;
};

/** aggregate fields of "conferences" */
export type Conferences_Aggregate_Fields = {
  __typename?: 'conferences_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Conferences_Max_Fields>;
  min?: Maybe<Conferences_Min_Fields>;
};


/** aggregate fields of "conferences" */
export type Conferences_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Conferences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "conferences". All fields are combined with a logical 'AND'. */
export type Conferences_Bool_Exp = {
  _and?: InputMaybe<Array<Conferences_Bool_Exp>>;
  _not?: InputMaybe<Conferences_Bool_Exp>;
  _or?: InputMaybe<Array<Conferences_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  place?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "conferences" */
export type Conferences_Constraint =
  /** unique or primary key constraint */
  | 'conferences_pkey';

/** input type for inserting data into table "conferences" */
export type Conferences_Insert_Input = {
  date?: InputMaybe<Scalars['date']>;
  name?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Conferences_Max_Fields = {
  __typename?: 'conferences_max_fields';
  date?: Maybe<Scalars['date']>;
  name?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Conferences_Min_Fields = {
  __typename?: 'conferences_min_fields';
  date?: Maybe<Scalars['date']>;
  name?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "conferences" */
export type Conferences_Mutation_Response = {
  __typename?: 'conferences_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Conferences>;
};

/** on_conflict condition type for table "conferences" */
export type Conferences_On_Conflict = {
  constraint: Conferences_Constraint;
  update_columns?: Array<Conferences_Update_Column>;
  where?: InputMaybe<Conferences_Bool_Exp>;
};

/** Ordering options when selecting data from "conferences". */
export type Conferences_Order_By = {
  date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  place?: InputMaybe<Order_By>;
};

/** primary key columns input for table: conferences */
export type Conferences_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "conferences" */
export type Conferences_Select_Column =
  /** column name */
  | 'date'
  /** column name */
  | 'name'
  /** column name */
  | 'place';

/** input type for updating data in table "conferences" */
export type Conferences_Set_Input = {
  date?: InputMaybe<Scalars['date']>;
  name?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
};

/** update columns of table "conferences" */
export type Conferences_Update_Column =
  /** column name */
  | 'date'
  /** column name */
  | 'name'
  /** column name */
  | 'place';

/** columns and relationships of "copy_users" */
export type Copy_Users = {
  __typename?: 'copy_users';
  /** An object relationship */
  gold_user?: Maybe<Gold_Users>;
  gold_user_id: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "copy_users" */
export type Copy_Users_Aggregate = {
  __typename?: 'copy_users_aggregate';
  aggregate?: Maybe<Copy_Users_Aggregate_Fields>;
  nodes: Array<Copy_Users>;
};

/** aggregate fields of "copy_users" */
export type Copy_Users_Aggregate_Fields = {
  __typename?: 'copy_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Copy_Users_Max_Fields>;
  min?: Maybe<Copy_Users_Min_Fields>;
};


/** aggregate fields of "copy_users" */
export type Copy_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Copy_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "copy_users" */
export type Copy_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Copy_Users_Max_Order_By>;
  min?: InputMaybe<Copy_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "copy_users" */
export type Copy_Users_Arr_Rel_Insert_Input = {
  data: Array<Copy_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Copy_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "copy_users". All fields are combined with a logical 'AND'. */
export type Copy_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Copy_Users_Bool_Exp>>;
  _not?: InputMaybe<Copy_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Copy_Users_Bool_Exp>>;
  gold_user?: InputMaybe<Gold_Users_Bool_Exp>;
  gold_user_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "copy_users" */
export type Copy_Users_Constraint =
  /** unique or primary key constraint */
  | 'copy_users_pkey';

/** input type for inserting data into table "copy_users" */
export type Copy_Users_Insert_Input = {
  gold_user?: InputMaybe<Gold_Users_Obj_Rel_Insert_Input>;
  gold_user_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Copy_Users_Max_Fields = {
  __typename?: 'copy_users_max_fields';
  gold_user_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "copy_users" */
export type Copy_Users_Max_Order_By = {
  gold_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Copy_Users_Min_Fields = {
  __typename?: 'copy_users_min_fields';
  gold_user_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "copy_users" */
export type Copy_Users_Min_Order_By = {
  gold_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "copy_users" */
export type Copy_Users_Mutation_Response = {
  __typename?: 'copy_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Copy_Users>;
};

/** on_conflict condition type for table "copy_users" */
export type Copy_Users_On_Conflict = {
  constraint: Copy_Users_Constraint;
  update_columns?: Array<Copy_Users_Update_Column>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "copy_users". */
export type Copy_Users_Order_By = {
  gold_user?: InputMaybe<Gold_Users_Order_By>;
  gold_user_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: copy_users */
export type Copy_Users_Pk_Columns_Input = {
  gold_user_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "copy_users" */
export type Copy_Users_Select_Column =
  /** column name */
  | 'gold_user_id'
  /** column name */
  | 'user_id';

/** input type for updating data in table "copy_users" */
export type Copy_Users_Set_Input = {
  gold_user_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "copy_users" */
export type Copy_Users_Update_Column =
  /** column name */
  | 'gold_user_id'
  /** column name */
  | 'user_id';

/** columns and relationships of "current_positions" */
export type Current_Positions = {
  __typename?: 'current_positions';
  audcad?: Maybe<Scalars['numeric']>;
  audchf?: Maybe<Scalars['numeric']>;
  audjpy?: Maybe<Scalars['numeric']>;
  audnzd?: Maybe<Scalars['numeric']>;
  audusd?: Maybe<Scalars['numeric']>;
  cadchf?: Maybe<Scalars['numeric']>;
  cadjpy?: Maybe<Scalars['numeric']>;
  chfjpy?: Maybe<Scalars['numeric']>;
  euraud?: Maybe<Scalars['numeric']>;
  eurcad?: Maybe<Scalars['numeric']>;
  eurchf?: Maybe<Scalars['numeric']>;
  eurgbp?: Maybe<Scalars['numeric']>;
  eurjpy?: Maybe<Scalars['numeric']>;
  eurnzd?: Maybe<Scalars['numeric']>;
  eurusd?: Maybe<Scalars['numeric']>;
  gbpaud?: Maybe<Scalars['numeric']>;
  gbpcad?: Maybe<Scalars['numeric']>;
  gbpchf?: Maybe<Scalars['numeric']>;
  gbpjpy?: Maybe<Scalars['numeric']>;
  gbpnzd?: Maybe<Scalars['numeric']>;
  gbpusd?: Maybe<Scalars['numeric']>;
  gold?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  gold_user: Gold_Users;
  jp225cash?: Maybe<Scalars['numeric']>;
  nzdcad?: Maybe<Scalars['numeric']>;
  nzdchf?: Maybe<Scalars['numeric']>;
  nzdjpy?: Maybe<Scalars['numeric']>;
  nzdusd?: Maybe<Scalars['numeric']>;
  oil?: Maybe<Scalars['numeric']>;
  raw?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  team_member: Array<Team_Member>;
  /** An aggregate relationship */
  team_member_aggregate: Team_Member_Aggregate;
  usdcad?: Maybe<Scalars['numeric']>;
  usdchf?: Maybe<Scalars['numeric']>;
  usdjpy?: Maybe<Scalars['numeric']>;
  user_id: Scalars['String'];
};


/** columns and relationships of "current_positions" */
export type Current_PositionsTeam_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


/** columns and relationships of "current_positions" */
export type Current_PositionsTeam_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};

/** aggregated selection of "current_positions" */
export type Current_Positions_Aggregate = {
  __typename?: 'current_positions_aggregate';
  aggregate?: Maybe<Current_Positions_Aggregate_Fields>;
  nodes: Array<Current_Positions>;
};

/** aggregate fields of "current_positions" */
export type Current_Positions_Aggregate_Fields = {
  __typename?: 'current_positions_aggregate_fields';
  avg?: Maybe<Current_Positions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Current_Positions_Max_Fields>;
  min?: Maybe<Current_Positions_Min_Fields>;
  stddev?: Maybe<Current_Positions_Stddev_Fields>;
  stddev_pop?: Maybe<Current_Positions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Current_Positions_Stddev_Samp_Fields>;
  sum?: Maybe<Current_Positions_Sum_Fields>;
  var_pop?: Maybe<Current_Positions_Var_Pop_Fields>;
  var_samp?: Maybe<Current_Positions_Var_Samp_Fields>;
  variance?: Maybe<Current_Positions_Variance_Fields>;
};


/** aggregate fields of "current_positions" */
export type Current_Positions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Current_Positions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Current_Positions_Avg_Fields = {
  __typename?: 'current_positions_avg_fields';
  audcad?: Maybe<Scalars['Float']>;
  audchf?: Maybe<Scalars['Float']>;
  audjpy?: Maybe<Scalars['Float']>;
  audnzd?: Maybe<Scalars['Float']>;
  audusd?: Maybe<Scalars['Float']>;
  cadchf?: Maybe<Scalars['Float']>;
  cadjpy?: Maybe<Scalars['Float']>;
  chfjpy?: Maybe<Scalars['Float']>;
  euraud?: Maybe<Scalars['Float']>;
  eurcad?: Maybe<Scalars['Float']>;
  eurchf?: Maybe<Scalars['Float']>;
  eurgbp?: Maybe<Scalars['Float']>;
  eurjpy?: Maybe<Scalars['Float']>;
  eurnzd?: Maybe<Scalars['Float']>;
  eurusd?: Maybe<Scalars['Float']>;
  gbpaud?: Maybe<Scalars['Float']>;
  gbpcad?: Maybe<Scalars['Float']>;
  gbpchf?: Maybe<Scalars['Float']>;
  gbpjpy?: Maybe<Scalars['Float']>;
  gbpnzd?: Maybe<Scalars['Float']>;
  gbpusd?: Maybe<Scalars['Float']>;
  gold?: Maybe<Scalars['Float']>;
  jp225cash?: Maybe<Scalars['Float']>;
  nzdcad?: Maybe<Scalars['Float']>;
  nzdchf?: Maybe<Scalars['Float']>;
  nzdjpy?: Maybe<Scalars['Float']>;
  nzdusd?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  usdcad?: Maybe<Scalars['Float']>;
  usdchf?: Maybe<Scalars['Float']>;
  usdjpy?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "current_positions". All fields are combined with a logical 'AND'. */
export type Current_Positions_Bool_Exp = {
  _and?: InputMaybe<Array<Current_Positions_Bool_Exp>>;
  _not?: InputMaybe<Current_Positions_Bool_Exp>;
  _or?: InputMaybe<Array<Current_Positions_Bool_Exp>>;
  audcad?: InputMaybe<Numeric_Comparison_Exp>;
  audchf?: InputMaybe<Numeric_Comparison_Exp>;
  audjpy?: InputMaybe<Numeric_Comparison_Exp>;
  audnzd?: InputMaybe<Numeric_Comparison_Exp>;
  audusd?: InputMaybe<Numeric_Comparison_Exp>;
  cadchf?: InputMaybe<Numeric_Comparison_Exp>;
  cadjpy?: InputMaybe<Numeric_Comparison_Exp>;
  chfjpy?: InputMaybe<Numeric_Comparison_Exp>;
  euraud?: InputMaybe<Numeric_Comparison_Exp>;
  eurcad?: InputMaybe<Numeric_Comparison_Exp>;
  eurchf?: InputMaybe<Numeric_Comparison_Exp>;
  eurgbp?: InputMaybe<Numeric_Comparison_Exp>;
  eurjpy?: InputMaybe<Numeric_Comparison_Exp>;
  eurnzd?: InputMaybe<Numeric_Comparison_Exp>;
  eurusd?: InputMaybe<Numeric_Comparison_Exp>;
  gbpaud?: InputMaybe<Numeric_Comparison_Exp>;
  gbpcad?: InputMaybe<Numeric_Comparison_Exp>;
  gbpchf?: InputMaybe<Numeric_Comparison_Exp>;
  gbpjpy?: InputMaybe<Numeric_Comparison_Exp>;
  gbpnzd?: InputMaybe<Numeric_Comparison_Exp>;
  gbpusd?: InputMaybe<Numeric_Comparison_Exp>;
  gold?: InputMaybe<Numeric_Comparison_Exp>;
  gold_user?: InputMaybe<Gold_Users_Bool_Exp>;
  jp225cash?: InputMaybe<Numeric_Comparison_Exp>;
  nzdcad?: InputMaybe<Numeric_Comparison_Exp>;
  nzdchf?: InputMaybe<Numeric_Comparison_Exp>;
  nzdjpy?: InputMaybe<Numeric_Comparison_Exp>;
  nzdusd?: InputMaybe<Numeric_Comparison_Exp>;
  oil?: InputMaybe<Numeric_Comparison_Exp>;
  raw?: InputMaybe<String_Comparison_Exp>;
  receivedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  team_member?: InputMaybe<Team_Member_Bool_Exp>;
  usdcad?: InputMaybe<Numeric_Comparison_Exp>;
  usdchf?: InputMaybe<Numeric_Comparison_Exp>;
  usdjpy?: InputMaybe<Numeric_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "current_positions" */
export type Current_Positions_Constraint =
  /** unique or primary key constraint */
  | 'current_positions_pkey';

/** input type for incrementing numeric columns in table "current_positions" */
export type Current_Positions_Inc_Input = {
  audcad?: InputMaybe<Scalars['numeric']>;
  audchf?: InputMaybe<Scalars['numeric']>;
  audjpy?: InputMaybe<Scalars['numeric']>;
  audnzd?: InputMaybe<Scalars['numeric']>;
  audusd?: InputMaybe<Scalars['numeric']>;
  cadchf?: InputMaybe<Scalars['numeric']>;
  cadjpy?: InputMaybe<Scalars['numeric']>;
  chfjpy?: InputMaybe<Scalars['numeric']>;
  euraud?: InputMaybe<Scalars['numeric']>;
  eurcad?: InputMaybe<Scalars['numeric']>;
  eurchf?: InputMaybe<Scalars['numeric']>;
  eurgbp?: InputMaybe<Scalars['numeric']>;
  eurjpy?: InputMaybe<Scalars['numeric']>;
  eurnzd?: InputMaybe<Scalars['numeric']>;
  eurusd?: InputMaybe<Scalars['numeric']>;
  gbpaud?: InputMaybe<Scalars['numeric']>;
  gbpcad?: InputMaybe<Scalars['numeric']>;
  gbpchf?: InputMaybe<Scalars['numeric']>;
  gbpjpy?: InputMaybe<Scalars['numeric']>;
  gbpnzd?: InputMaybe<Scalars['numeric']>;
  gbpusd?: InputMaybe<Scalars['numeric']>;
  gold?: InputMaybe<Scalars['numeric']>;
  jp225cash?: InputMaybe<Scalars['numeric']>;
  nzdcad?: InputMaybe<Scalars['numeric']>;
  nzdchf?: InputMaybe<Scalars['numeric']>;
  nzdjpy?: InputMaybe<Scalars['numeric']>;
  nzdusd?: InputMaybe<Scalars['numeric']>;
  oil?: InputMaybe<Scalars['numeric']>;
  usdcad?: InputMaybe<Scalars['numeric']>;
  usdchf?: InputMaybe<Scalars['numeric']>;
  usdjpy?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "current_positions" */
export type Current_Positions_Insert_Input = {
  audcad?: InputMaybe<Scalars['numeric']>;
  audchf?: InputMaybe<Scalars['numeric']>;
  audjpy?: InputMaybe<Scalars['numeric']>;
  audnzd?: InputMaybe<Scalars['numeric']>;
  audusd?: InputMaybe<Scalars['numeric']>;
  cadchf?: InputMaybe<Scalars['numeric']>;
  cadjpy?: InputMaybe<Scalars['numeric']>;
  chfjpy?: InputMaybe<Scalars['numeric']>;
  euraud?: InputMaybe<Scalars['numeric']>;
  eurcad?: InputMaybe<Scalars['numeric']>;
  eurchf?: InputMaybe<Scalars['numeric']>;
  eurgbp?: InputMaybe<Scalars['numeric']>;
  eurjpy?: InputMaybe<Scalars['numeric']>;
  eurnzd?: InputMaybe<Scalars['numeric']>;
  eurusd?: InputMaybe<Scalars['numeric']>;
  gbpaud?: InputMaybe<Scalars['numeric']>;
  gbpcad?: InputMaybe<Scalars['numeric']>;
  gbpchf?: InputMaybe<Scalars['numeric']>;
  gbpjpy?: InputMaybe<Scalars['numeric']>;
  gbpnzd?: InputMaybe<Scalars['numeric']>;
  gbpusd?: InputMaybe<Scalars['numeric']>;
  gold?: InputMaybe<Scalars['numeric']>;
  gold_user?: InputMaybe<Gold_Users_Obj_Rel_Insert_Input>;
  jp225cash?: InputMaybe<Scalars['numeric']>;
  nzdcad?: InputMaybe<Scalars['numeric']>;
  nzdchf?: InputMaybe<Scalars['numeric']>;
  nzdjpy?: InputMaybe<Scalars['numeric']>;
  nzdusd?: InputMaybe<Scalars['numeric']>;
  oil?: InputMaybe<Scalars['numeric']>;
  raw?: InputMaybe<Scalars['String']>;
  receivedAt?: InputMaybe<Scalars['timestamptz']>;
  team_member?: InputMaybe<Team_Member_Arr_Rel_Insert_Input>;
  usdcad?: InputMaybe<Scalars['numeric']>;
  usdchf?: InputMaybe<Scalars['numeric']>;
  usdjpy?: InputMaybe<Scalars['numeric']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Current_Positions_Max_Fields = {
  __typename?: 'current_positions_max_fields';
  audcad?: Maybe<Scalars['numeric']>;
  audchf?: Maybe<Scalars['numeric']>;
  audjpy?: Maybe<Scalars['numeric']>;
  audnzd?: Maybe<Scalars['numeric']>;
  audusd?: Maybe<Scalars['numeric']>;
  cadchf?: Maybe<Scalars['numeric']>;
  cadjpy?: Maybe<Scalars['numeric']>;
  chfjpy?: Maybe<Scalars['numeric']>;
  euraud?: Maybe<Scalars['numeric']>;
  eurcad?: Maybe<Scalars['numeric']>;
  eurchf?: Maybe<Scalars['numeric']>;
  eurgbp?: Maybe<Scalars['numeric']>;
  eurjpy?: Maybe<Scalars['numeric']>;
  eurnzd?: Maybe<Scalars['numeric']>;
  eurusd?: Maybe<Scalars['numeric']>;
  gbpaud?: Maybe<Scalars['numeric']>;
  gbpcad?: Maybe<Scalars['numeric']>;
  gbpchf?: Maybe<Scalars['numeric']>;
  gbpjpy?: Maybe<Scalars['numeric']>;
  gbpnzd?: Maybe<Scalars['numeric']>;
  gbpusd?: Maybe<Scalars['numeric']>;
  gold?: Maybe<Scalars['numeric']>;
  jp225cash?: Maybe<Scalars['numeric']>;
  nzdcad?: Maybe<Scalars['numeric']>;
  nzdchf?: Maybe<Scalars['numeric']>;
  nzdjpy?: Maybe<Scalars['numeric']>;
  nzdusd?: Maybe<Scalars['numeric']>;
  oil?: Maybe<Scalars['numeric']>;
  raw?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['timestamptz']>;
  usdcad?: Maybe<Scalars['numeric']>;
  usdchf?: Maybe<Scalars['numeric']>;
  usdjpy?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Current_Positions_Min_Fields = {
  __typename?: 'current_positions_min_fields';
  audcad?: Maybe<Scalars['numeric']>;
  audchf?: Maybe<Scalars['numeric']>;
  audjpy?: Maybe<Scalars['numeric']>;
  audnzd?: Maybe<Scalars['numeric']>;
  audusd?: Maybe<Scalars['numeric']>;
  cadchf?: Maybe<Scalars['numeric']>;
  cadjpy?: Maybe<Scalars['numeric']>;
  chfjpy?: Maybe<Scalars['numeric']>;
  euraud?: Maybe<Scalars['numeric']>;
  eurcad?: Maybe<Scalars['numeric']>;
  eurchf?: Maybe<Scalars['numeric']>;
  eurgbp?: Maybe<Scalars['numeric']>;
  eurjpy?: Maybe<Scalars['numeric']>;
  eurnzd?: Maybe<Scalars['numeric']>;
  eurusd?: Maybe<Scalars['numeric']>;
  gbpaud?: Maybe<Scalars['numeric']>;
  gbpcad?: Maybe<Scalars['numeric']>;
  gbpchf?: Maybe<Scalars['numeric']>;
  gbpjpy?: Maybe<Scalars['numeric']>;
  gbpnzd?: Maybe<Scalars['numeric']>;
  gbpusd?: Maybe<Scalars['numeric']>;
  gold?: Maybe<Scalars['numeric']>;
  jp225cash?: Maybe<Scalars['numeric']>;
  nzdcad?: Maybe<Scalars['numeric']>;
  nzdchf?: Maybe<Scalars['numeric']>;
  nzdjpy?: Maybe<Scalars['numeric']>;
  nzdusd?: Maybe<Scalars['numeric']>;
  oil?: Maybe<Scalars['numeric']>;
  raw?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['timestamptz']>;
  usdcad?: Maybe<Scalars['numeric']>;
  usdchf?: Maybe<Scalars['numeric']>;
  usdjpy?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "current_positions" */
export type Current_Positions_Mutation_Response = {
  __typename?: 'current_positions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Current_Positions>;
};

/** input type for inserting object relation for remote table "current_positions" */
export type Current_Positions_Obj_Rel_Insert_Input = {
  data: Current_Positions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Current_Positions_On_Conflict>;
};

/** on_conflict condition type for table "current_positions" */
export type Current_Positions_On_Conflict = {
  constraint: Current_Positions_Constraint;
  update_columns?: Array<Current_Positions_Update_Column>;
  where?: InputMaybe<Current_Positions_Bool_Exp>;
};

/** Ordering options when selecting data from "current_positions". */
export type Current_Positions_Order_By = {
  audcad?: InputMaybe<Order_By>;
  audchf?: InputMaybe<Order_By>;
  audjpy?: InputMaybe<Order_By>;
  audnzd?: InputMaybe<Order_By>;
  audusd?: InputMaybe<Order_By>;
  cadchf?: InputMaybe<Order_By>;
  cadjpy?: InputMaybe<Order_By>;
  chfjpy?: InputMaybe<Order_By>;
  euraud?: InputMaybe<Order_By>;
  eurcad?: InputMaybe<Order_By>;
  eurchf?: InputMaybe<Order_By>;
  eurgbp?: InputMaybe<Order_By>;
  eurjpy?: InputMaybe<Order_By>;
  eurnzd?: InputMaybe<Order_By>;
  eurusd?: InputMaybe<Order_By>;
  gbpaud?: InputMaybe<Order_By>;
  gbpcad?: InputMaybe<Order_By>;
  gbpchf?: InputMaybe<Order_By>;
  gbpjpy?: InputMaybe<Order_By>;
  gbpnzd?: InputMaybe<Order_By>;
  gbpusd?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  gold_user?: InputMaybe<Gold_Users_Order_By>;
  jp225cash?: InputMaybe<Order_By>;
  nzdcad?: InputMaybe<Order_By>;
  nzdchf?: InputMaybe<Order_By>;
  nzdjpy?: InputMaybe<Order_By>;
  nzdusd?: InputMaybe<Order_By>;
  oil?: InputMaybe<Order_By>;
  raw?: InputMaybe<Order_By>;
  receivedAt?: InputMaybe<Order_By>;
  team_member_aggregate?: InputMaybe<Team_Member_Aggregate_Order_By>;
  usdcad?: InputMaybe<Order_By>;
  usdchf?: InputMaybe<Order_By>;
  usdjpy?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: current_positions */
export type Current_Positions_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "current_positions" */
export type Current_Positions_Select_Column =
  /** column name */
  | 'audcad'
  /** column name */
  | 'audchf'
  /** column name */
  | 'audjpy'
  /** column name */
  | 'audnzd'
  /** column name */
  | 'audusd'
  /** column name */
  | 'cadchf'
  /** column name */
  | 'cadjpy'
  /** column name */
  | 'chfjpy'
  /** column name */
  | 'euraud'
  /** column name */
  | 'eurcad'
  /** column name */
  | 'eurchf'
  /** column name */
  | 'eurgbp'
  /** column name */
  | 'eurjpy'
  /** column name */
  | 'eurnzd'
  /** column name */
  | 'eurusd'
  /** column name */
  | 'gbpaud'
  /** column name */
  | 'gbpcad'
  /** column name */
  | 'gbpchf'
  /** column name */
  | 'gbpjpy'
  /** column name */
  | 'gbpnzd'
  /** column name */
  | 'gbpusd'
  /** column name */
  | 'gold'
  /** column name */
  | 'jp225cash'
  /** column name */
  | 'nzdcad'
  /** column name */
  | 'nzdchf'
  /** column name */
  | 'nzdjpy'
  /** column name */
  | 'nzdusd'
  /** column name */
  | 'oil'
  /** column name */
  | 'raw'
  /** column name */
  | 'receivedAt'
  /** column name */
  | 'usdcad'
  /** column name */
  | 'usdchf'
  /** column name */
  | 'usdjpy'
  /** column name */
  | 'user_id';

/** input type for updating data in table "current_positions" */
export type Current_Positions_Set_Input = {
  audcad?: InputMaybe<Scalars['numeric']>;
  audchf?: InputMaybe<Scalars['numeric']>;
  audjpy?: InputMaybe<Scalars['numeric']>;
  audnzd?: InputMaybe<Scalars['numeric']>;
  audusd?: InputMaybe<Scalars['numeric']>;
  cadchf?: InputMaybe<Scalars['numeric']>;
  cadjpy?: InputMaybe<Scalars['numeric']>;
  chfjpy?: InputMaybe<Scalars['numeric']>;
  euraud?: InputMaybe<Scalars['numeric']>;
  eurcad?: InputMaybe<Scalars['numeric']>;
  eurchf?: InputMaybe<Scalars['numeric']>;
  eurgbp?: InputMaybe<Scalars['numeric']>;
  eurjpy?: InputMaybe<Scalars['numeric']>;
  eurnzd?: InputMaybe<Scalars['numeric']>;
  eurusd?: InputMaybe<Scalars['numeric']>;
  gbpaud?: InputMaybe<Scalars['numeric']>;
  gbpcad?: InputMaybe<Scalars['numeric']>;
  gbpchf?: InputMaybe<Scalars['numeric']>;
  gbpjpy?: InputMaybe<Scalars['numeric']>;
  gbpnzd?: InputMaybe<Scalars['numeric']>;
  gbpusd?: InputMaybe<Scalars['numeric']>;
  gold?: InputMaybe<Scalars['numeric']>;
  jp225cash?: InputMaybe<Scalars['numeric']>;
  nzdcad?: InputMaybe<Scalars['numeric']>;
  nzdchf?: InputMaybe<Scalars['numeric']>;
  nzdjpy?: InputMaybe<Scalars['numeric']>;
  nzdusd?: InputMaybe<Scalars['numeric']>;
  oil?: InputMaybe<Scalars['numeric']>;
  raw?: InputMaybe<Scalars['String']>;
  receivedAt?: InputMaybe<Scalars['timestamptz']>;
  usdcad?: InputMaybe<Scalars['numeric']>;
  usdchf?: InputMaybe<Scalars['numeric']>;
  usdjpy?: InputMaybe<Scalars['numeric']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Current_Positions_Stddev_Fields = {
  __typename?: 'current_positions_stddev_fields';
  audcad?: Maybe<Scalars['Float']>;
  audchf?: Maybe<Scalars['Float']>;
  audjpy?: Maybe<Scalars['Float']>;
  audnzd?: Maybe<Scalars['Float']>;
  audusd?: Maybe<Scalars['Float']>;
  cadchf?: Maybe<Scalars['Float']>;
  cadjpy?: Maybe<Scalars['Float']>;
  chfjpy?: Maybe<Scalars['Float']>;
  euraud?: Maybe<Scalars['Float']>;
  eurcad?: Maybe<Scalars['Float']>;
  eurchf?: Maybe<Scalars['Float']>;
  eurgbp?: Maybe<Scalars['Float']>;
  eurjpy?: Maybe<Scalars['Float']>;
  eurnzd?: Maybe<Scalars['Float']>;
  eurusd?: Maybe<Scalars['Float']>;
  gbpaud?: Maybe<Scalars['Float']>;
  gbpcad?: Maybe<Scalars['Float']>;
  gbpchf?: Maybe<Scalars['Float']>;
  gbpjpy?: Maybe<Scalars['Float']>;
  gbpnzd?: Maybe<Scalars['Float']>;
  gbpusd?: Maybe<Scalars['Float']>;
  gold?: Maybe<Scalars['Float']>;
  jp225cash?: Maybe<Scalars['Float']>;
  nzdcad?: Maybe<Scalars['Float']>;
  nzdchf?: Maybe<Scalars['Float']>;
  nzdjpy?: Maybe<Scalars['Float']>;
  nzdusd?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  usdcad?: Maybe<Scalars['Float']>;
  usdchf?: Maybe<Scalars['Float']>;
  usdjpy?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Current_Positions_Stddev_Pop_Fields = {
  __typename?: 'current_positions_stddev_pop_fields';
  audcad?: Maybe<Scalars['Float']>;
  audchf?: Maybe<Scalars['Float']>;
  audjpy?: Maybe<Scalars['Float']>;
  audnzd?: Maybe<Scalars['Float']>;
  audusd?: Maybe<Scalars['Float']>;
  cadchf?: Maybe<Scalars['Float']>;
  cadjpy?: Maybe<Scalars['Float']>;
  chfjpy?: Maybe<Scalars['Float']>;
  euraud?: Maybe<Scalars['Float']>;
  eurcad?: Maybe<Scalars['Float']>;
  eurchf?: Maybe<Scalars['Float']>;
  eurgbp?: Maybe<Scalars['Float']>;
  eurjpy?: Maybe<Scalars['Float']>;
  eurnzd?: Maybe<Scalars['Float']>;
  eurusd?: Maybe<Scalars['Float']>;
  gbpaud?: Maybe<Scalars['Float']>;
  gbpcad?: Maybe<Scalars['Float']>;
  gbpchf?: Maybe<Scalars['Float']>;
  gbpjpy?: Maybe<Scalars['Float']>;
  gbpnzd?: Maybe<Scalars['Float']>;
  gbpusd?: Maybe<Scalars['Float']>;
  gold?: Maybe<Scalars['Float']>;
  jp225cash?: Maybe<Scalars['Float']>;
  nzdcad?: Maybe<Scalars['Float']>;
  nzdchf?: Maybe<Scalars['Float']>;
  nzdjpy?: Maybe<Scalars['Float']>;
  nzdusd?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  usdcad?: Maybe<Scalars['Float']>;
  usdchf?: Maybe<Scalars['Float']>;
  usdjpy?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Current_Positions_Stddev_Samp_Fields = {
  __typename?: 'current_positions_stddev_samp_fields';
  audcad?: Maybe<Scalars['Float']>;
  audchf?: Maybe<Scalars['Float']>;
  audjpy?: Maybe<Scalars['Float']>;
  audnzd?: Maybe<Scalars['Float']>;
  audusd?: Maybe<Scalars['Float']>;
  cadchf?: Maybe<Scalars['Float']>;
  cadjpy?: Maybe<Scalars['Float']>;
  chfjpy?: Maybe<Scalars['Float']>;
  euraud?: Maybe<Scalars['Float']>;
  eurcad?: Maybe<Scalars['Float']>;
  eurchf?: Maybe<Scalars['Float']>;
  eurgbp?: Maybe<Scalars['Float']>;
  eurjpy?: Maybe<Scalars['Float']>;
  eurnzd?: Maybe<Scalars['Float']>;
  eurusd?: Maybe<Scalars['Float']>;
  gbpaud?: Maybe<Scalars['Float']>;
  gbpcad?: Maybe<Scalars['Float']>;
  gbpchf?: Maybe<Scalars['Float']>;
  gbpjpy?: Maybe<Scalars['Float']>;
  gbpnzd?: Maybe<Scalars['Float']>;
  gbpusd?: Maybe<Scalars['Float']>;
  gold?: Maybe<Scalars['Float']>;
  jp225cash?: Maybe<Scalars['Float']>;
  nzdcad?: Maybe<Scalars['Float']>;
  nzdchf?: Maybe<Scalars['Float']>;
  nzdjpy?: Maybe<Scalars['Float']>;
  nzdusd?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  usdcad?: Maybe<Scalars['Float']>;
  usdchf?: Maybe<Scalars['Float']>;
  usdjpy?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Current_Positions_Sum_Fields = {
  __typename?: 'current_positions_sum_fields';
  audcad?: Maybe<Scalars['numeric']>;
  audchf?: Maybe<Scalars['numeric']>;
  audjpy?: Maybe<Scalars['numeric']>;
  audnzd?: Maybe<Scalars['numeric']>;
  audusd?: Maybe<Scalars['numeric']>;
  cadchf?: Maybe<Scalars['numeric']>;
  cadjpy?: Maybe<Scalars['numeric']>;
  chfjpy?: Maybe<Scalars['numeric']>;
  euraud?: Maybe<Scalars['numeric']>;
  eurcad?: Maybe<Scalars['numeric']>;
  eurchf?: Maybe<Scalars['numeric']>;
  eurgbp?: Maybe<Scalars['numeric']>;
  eurjpy?: Maybe<Scalars['numeric']>;
  eurnzd?: Maybe<Scalars['numeric']>;
  eurusd?: Maybe<Scalars['numeric']>;
  gbpaud?: Maybe<Scalars['numeric']>;
  gbpcad?: Maybe<Scalars['numeric']>;
  gbpchf?: Maybe<Scalars['numeric']>;
  gbpjpy?: Maybe<Scalars['numeric']>;
  gbpnzd?: Maybe<Scalars['numeric']>;
  gbpusd?: Maybe<Scalars['numeric']>;
  gold?: Maybe<Scalars['numeric']>;
  jp225cash?: Maybe<Scalars['numeric']>;
  nzdcad?: Maybe<Scalars['numeric']>;
  nzdchf?: Maybe<Scalars['numeric']>;
  nzdjpy?: Maybe<Scalars['numeric']>;
  nzdusd?: Maybe<Scalars['numeric']>;
  oil?: Maybe<Scalars['numeric']>;
  usdcad?: Maybe<Scalars['numeric']>;
  usdchf?: Maybe<Scalars['numeric']>;
  usdjpy?: Maybe<Scalars['numeric']>;
};

/** update columns of table "current_positions" */
export type Current_Positions_Update_Column =
  /** column name */
  | 'audcad'
  /** column name */
  | 'audchf'
  /** column name */
  | 'audjpy'
  /** column name */
  | 'audnzd'
  /** column name */
  | 'audusd'
  /** column name */
  | 'cadchf'
  /** column name */
  | 'cadjpy'
  /** column name */
  | 'chfjpy'
  /** column name */
  | 'euraud'
  /** column name */
  | 'eurcad'
  /** column name */
  | 'eurchf'
  /** column name */
  | 'eurgbp'
  /** column name */
  | 'eurjpy'
  /** column name */
  | 'eurnzd'
  /** column name */
  | 'eurusd'
  /** column name */
  | 'gbpaud'
  /** column name */
  | 'gbpcad'
  /** column name */
  | 'gbpchf'
  /** column name */
  | 'gbpjpy'
  /** column name */
  | 'gbpnzd'
  /** column name */
  | 'gbpusd'
  /** column name */
  | 'gold'
  /** column name */
  | 'jp225cash'
  /** column name */
  | 'nzdcad'
  /** column name */
  | 'nzdchf'
  /** column name */
  | 'nzdjpy'
  /** column name */
  | 'nzdusd'
  /** column name */
  | 'oil'
  /** column name */
  | 'raw'
  /** column name */
  | 'receivedAt'
  /** column name */
  | 'usdcad'
  /** column name */
  | 'usdchf'
  /** column name */
  | 'usdjpy'
  /** column name */
  | 'user_id';

/** aggregate var_pop on columns */
export type Current_Positions_Var_Pop_Fields = {
  __typename?: 'current_positions_var_pop_fields';
  audcad?: Maybe<Scalars['Float']>;
  audchf?: Maybe<Scalars['Float']>;
  audjpy?: Maybe<Scalars['Float']>;
  audnzd?: Maybe<Scalars['Float']>;
  audusd?: Maybe<Scalars['Float']>;
  cadchf?: Maybe<Scalars['Float']>;
  cadjpy?: Maybe<Scalars['Float']>;
  chfjpy?: Maybe<Scalars['Float']>;
  euraud?: Maybe<Scalars['Float']>;
  eurcad?: Maybe<Scalars['Float']>;
  eurchf?: Maybe<Scalars['Float']>;
  eurgbp?: Maybe<Scalars['Float']>;
  eurjpy?: Maybe<Scalars['Float']>;
  eurnzd?: Maybe<Scalars['Float']>;
  eurusd?: Maybe<Scalars['Float']>;
  gbpaud?: Maybe<Scalars['Float']>;
  gbpcad?: Maybe<Scalars['Float']>;
  gbpchf?: Maybe<Scalars['Float']>;
  gbpjpy?: Maybe<Scalars['Float']>;
  gbpnzd?: Maybe<Scalars['Float']>;
  gbpusd?: Maybe<Scalars['Float']>;
  gold?: Maybe<Scalars['Float']>;
  jp225cash?: Maybe<Scalars['Float']>;
  nzdcad?: Maybe<Scalars['Float']>;
  nzdchf?: Maybe<Scalars['Float']>;
  nzdjpy?: Maybe<Scalars['Float']>;
  nzdusd?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  usdcad?: Maybe<Scalars['Float']>;
  usdchf?: Maybe<Scalars['Float']>;
  usdjpy?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Current_Positions_Var_Samp_Fields = {
  __typename?: 'current_positions_var_samp_fields';
  audcad?: Maybe<Scalars['Float']>;
  audchf?: Maybe<Scalars['Float']>;
  audjpy?: Maybe<Scalars['Float']>;
  audnzd?: Maybe<Scalars['Float']>;
  audusd?: Maybe<Scalars['Float']>;
  cadchf?: Maybe<Scalars['Float']>;
  cadjpy?: Maybe<Scalars['Float']>;
  chfjpy?: Maybe<Scalars['Float']>;
  euraud?: Maybe<Scalars['Float']>;
  eurcad?: Maybe<Scalars['Float']>;
  eurchf?: Maybe<Scalars['Float']>;
  eurgbp?: Maybe<Scalars['Float']>;
  eurjpy?: Maybe<Scalars['Float']>;
  eurnzd?: Maybe<Scalars['Float']>;
  eurusd?: Maybe<Scalars['Float']>;
  gbpaud?: Maybe<Scalars['Float']>;
  gbpcad?: Maybe<Scalars['Float']>;
  gbpchf?: Maybe<Scalars['Float']>;
  gbpjpy?: Maybe<Scalars['Float']>;
  gbpnzd?: Maybe<Scalars['Float']>;
  gbpusd?: Maybe<Scalars['Float']>;
  gold?: Maybe<Scalars['Float']>;
  jp225cash?: Maybe<Scalars['Float']>;
  nzdcad?: Maybe<Scalars['Float']>;
  nzdchf?: Maybe<Scalars['Float']>;
  nzdjpy?: Maybe<Scalars['Float']>;
  nzdusd?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  usdcad?: Maybe<Scalars['Float']>;
  usdchf?: Maybe<Scalars['Float']>;
  usdjpy?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Current_Positions_Variance_Fields = {
  __typename?: 'current_positions_variance_fields';
  audcad?: Maybe<Scalars['Float']>;
  audchf?: Maybe<Scalars['Float']>;
  audjpy?: Maybe<Scalars['Float']>;
  audnzd?: Maybe<Scalars['Float']>;
  audusd?: Maybe<Scalars['Float']>;
  cadchf?: Maybe<Scalars['Float']>;
  cadjpy?: Maybe<Scalars['Float']>;
  chfjpy?: Maybe<Scalars['Float']>;
  euraud?: Maybe<Scalars['Float']>;
  eurcad?: Maybe<Scalars['Float']>;
  eurchf?: Maybe<Scalars['Float']>;
  eurgbp?: Maybe<Scalars['Float']>;
  eurjpy?: Maybe<Scalars['Float']>;
  eurnzd?: Maybe<Scalars['Float']>;
  eurusd?: Maybe<Scalars['Float']>;
  gbpaud?: Maybe<Scalars['Float']>;
  gbpcad?: Maybe<Scalars['Float']>;
  gbpchf?: Maybe<Scalars['Float']>;
  gbpjpy?: Maybe<Scalars['Float']>;
  gbpnzd?: Maybe<Scalars['Float']>;
  gbpusd?: Maybe<Scalars['Float']>;
  gold?: Maybe<Scalars['Float']>;
  jp225cash?: Maybe<Scalars['Float']>;
  nzdcad?: Maybe<Scalars['Float']>;
  nzdchf?: Maybe<Scalars['Float']>;
  nzdjpy?: Maybe<Scalars['Float']>;
  nzdusd?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  usdcad?: Maybe<Scalars['Float']>;
  usdchf?: Maybe<Scalars['Float']>;
  usdjpy?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  stripe_customer_id?: Maybe<Scalars['String']>;
  team_id: Scalars['String'];
  /** An object relationship */
  team_member?: Maybe<Team_Member>;
  user_id: Scalars['String'];
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  stripe_customer_id?: InputMaybe<String_Comparison_Exp>;
  team_id?: InputMaybe<String_Comparison_Exp>;
  team_member?: InputMaybe<Team_Member_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export type Customers_Constraint =
  /** unique or primary key constraint */
  | 'customers_pkey';

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  stripe_customer_id?: InputMaybe<Scalars['String']>;
  team_id?: InputMaybe<Scalars['String']>;
  team_member?: InputMaybe<Team_Member_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  stripe_customer_id?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  stripe_customer_id?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  stripe_customer_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_member?: InputMaybe<Team_Member_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "customers" */
export type Customers_Select_Column =
  /** column name */
  | 'stripe_customer_id'
  /** column name */
  | 'team_id'
  /** column name */
  | 'user_id';

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  stripe_customer_id?: InputMaybe<Scalars['String']>;
  team_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "customers" */
export type Customers_Update_Column =
  /** column name */
  | 'stripe_customer_id'
  /** column name */
  | 'team_id'
  /** column name */
  | 'user_id';

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "entries" */
export type Entries = {
  __typename?: 'entries';
  curr_id: Scalars['bpchar'];
  entry_id: Scalars['bpchar'];
  entry_time: Scalars['timestamptz'];
  exit_time: Scalars['timestamptz'];
  user_id: Scalars['bpchar'];
};

/** aggregated selection of "entries" */
export type Entries_Aggregate = {
  __typename?: 'entries_aggregate';
  aggregate?: Maybe<Entries_Aggregate_Fields>;
  nodes: Array<Entries>;
};

/** aggregate fields of "entries" */
export type Entries_Aggregate_Fields = {
  __typename?: 'entries_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Entries_Max_Fields>;
  min?: Maybe<Entries_Min_Fields>;
};


/** aggregate fields of "entries" */
export type Entries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "entries". All fields are combined with a logical 'AND'. */
export type Entries_Bool_Exp = {
  _and?: InputMaybe<Array<Entries_Bool_Exp>>;
  _not?: InputMaybe<Entries_Bool_Exp>;
  _or?: InputMaybe<Array<Entries_Bool_Exp>>;
  curr_id?: InputMaybe<Bpchar_Comparison_Exp>;
  entry_id?: InputMaybe<Bpchar_Comparison_Exp>;
  entry_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  exit_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "entries" */
export type Entries_Constraint =
  /** unique or primary key constraint */
  | 'entries_pkey';

/** input type for inserting data into table "entries" */
export type Entries_Insert_Input = {
  curr_id?: InputMaybe<Scalars['bpchar']>;
  entry_id?: InputMaybe<Scalars['bpchar']>;
  entry_time?: InputMaybe<Scalars['timestamptz']>;
  exit_time?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Entries_Max_Fields = {
  __typename?: 'entries_max_fields';
  curr_id?: Maybe<Scalars['bpchar']>;
  entry_id?: Maybe<Scalars['bpchar']>;
  entry_time?: Maybe<Scalars['timestamptz']>;
  exit_time?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Entries_Min_Fields = {
  __typename?: 'entries_min_fields';
  curr_id?: Maybe<Scalars['bpchar']>;
  entry_id?: Maybe<Scalars['bpchar']>;
  entry_time?: Maybe<Scalars['timestamptz']>;
  exit_time?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "entries" */
export type Entries_Mutation_Response = {
  __typename?: 'entries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entries>;
};

/** on_conflict condition type for table "entries" */
export type Entries_On_Conflict = {
  constraint: Entries_Constraint;
  update_columns?: Array<Entries_Update_Column>;
  where?: InputMaybe<Entries_Bool_Exp>;
};

/** Ordering options when selecting data from "entries". */
export type Entries_Order_By = {
  curr_id?: InputMaybe<Order_By>;
  entry_id?: InputMaybe<Order_By>;
  entry_time?: InputMaybe<Order_By>;
  exit_time?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entries */
export type Entries_Pk_Columns_Input = {
  entry_id: Scalars['bpchar'];
};

/** select columns of table "entries" */
export type Entries_Select_Column =
  /** column name */
  | 'curr_id'
  /** column name */
  | 'entry_id'
  /** column name */
  | 'entry_time'
  /** column name */
  | 'exit_time'
  /** column name */
  | 'user_id';

/** input type for updating data in table "entries" */
export type Entries_Set_Input = {
  curr_id?: InputMaybe<Scalars['bpchar']>;
  entry_id?: InputMaybe<Scalars['bpchar']>;
  entry_time?: InputMaybe<Scalars['timestamptz']>;
  exit_time?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** update columns of table "entries" */
export type Entries_Update_Column =
  /** column name */
  | 'curr_id'
  /** column name */
  | 'entry_id'
  /** column name */
  | 'entry_time'
  /** column name */
  | 'exit_time'
  /** column name */
  | 'user_id';

/** columns and relationships of "gold_users" */
export type Gold_Users = {
  __typename?: 'gold_users';
  broker?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  /** An array relationship */
  copy_users: Array<Copy_Users>;
  /** An aggregate relationship */
  copy_users_aggregate: Copy_Users_Aggregate;
  currency?: Maybe<Scalars['String']>;
  /** An object relationship */
  current_position?: Maybe<Current_Positions>;
  demo?: Maybe<Scalars['numeric']>;
  hash?: Maybe<Scalars['bytea']>;
  id: Scalars['String'];
  leverage?: Maybe<Scalars['Int']>;
  margin_free?: Maybe<Scalars['money']>;
  nickname?: Maybe<Scalars['String']>;
  /** An object relationship */
  positions_snapshot?: Maybe<Positions_Snapshot>;
  stop?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  team_gold_members: Array<Team_Gold_Member>;
  /** An aggregate relationship */
  team_gold_members_aggregate: Team_Gold_Member_Aggregate;
  trade_mode?: Maybe<Scalars['String']>;
  webhook_discord?: Maybe<Scalars['String']>;
  webhook_slack?: Maybe<Scalars['String']>;
};


/** columns and relationships of "gold_users" */
export type Gold_UsersCopy_UsersArgs = {
  distinct_on?: InputMaybe<Array<Copy_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Copy_Users_Order_By>>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};


/** columns and relationships of "gold_users" */
export type Gold_UsersCopy_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Copy_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Copy_Users_Order_By>>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};


/** columns and relationships of "gold_users" */
export type Gold_UsersTeam_Gold_MembersArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


/** columns and relationships of "gold_users" */
export type Gold_UsersTeam_Gold_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};

/** aggregated selection of "gold_users" */
export type Gold_Users_Aggregate = {
  __typename?: 'gold_users_aggregate';
  aggregate?: Maybe<Gold_Users_Aggregate_Fields>;
  nodes: Array<Gold_Users>;
};

/** aggregate fields of "gold_users" */
export type Gold_Users_Aggregate_Fields = {
  __typename?: 'gold_users_aggregate_fields';
  avg?: Maybe<Gold_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gold_Users_Max_Fields>;
  min?: Maybe<Gold_Users_Min_Fields>;
  stddev?: Maybe<Gold_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Gold_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gold_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Gold_Users_Sum_Fields>;
  var_pop?: Maybe<Gold_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Gold_Users_Var_Samp_Fields>;
  variance?: Maybe<Gold_Users_Variance_Fields>;
};


/** aggregate fields of "gold_users" */
export type Gold_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gold_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Gold_Users_Avg_Fields = {
  __typename?: 'gold_users_avg_fields';
  demo?: Maybe<Scalars['Float']>;
  leverage?: Maybe<Scalars['Float']>;
  margin_free?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "gold_users". All fields are combined with a logical 'AND'. */
export type Gold_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Gold_Users_Bool_Exp>>;
  _not?: InputMaybe<Gold_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Gold_Users_Bool_Exp>>;
  broker?: InputMaybe<String_Comparison_Exp>;
  channel?: InputMaybe<String_Comparison_Exp>;
  copy_users?: InputMaybe<Copy_Users_Bool_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  current_position?: InputMaybe<Current_Positions_Bool_Exp>;
  demo?: InputMaybe<Numeric_Comparison_Exp>;
  hash?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  leverage?: InputMaybe<Int_Comparison_Exp>;
  margin_free?: InputMaybe<Money_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  positions_snapshot?: InputMaybe<Positions_Snapshot_Bool_Exp>;
  stop?: InputMaybe<Boolean_Comparison_Exp>;
  team_gold_members?: InputMaybe<Team_Gold_Member_Bool_Exp>;
  trade_mode?: InputMaybe<String_Comparison_Exp>;
  webhook_discord?: InputMaybe<String_Comparison_Exp>;
  webhook_slack?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "gold_users" */
export type Gold_Users_Constraint =
  /** unique or primary key constraint */
  | 'gold_users_hash_key'
  /** unique or primary key constraint */
  | 'gold_users_pkey';

/** input type for incrementing numeric columns in table "gold_users" */
export type Gold_Users_Inc_Input = {
  demo?: InputMaybe<Scalars['numeric']>;
  leverage?: InputMaybe<Scalars['Int']>;
  margin_free?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "gold_users" */
export type Gold_Users_Insert_Input = {
  broker?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  copy_users?: InputMaybe<Copy_Users_Arr_Rel_Insert_Input>;
  currency?: InputMaybe<Scalars['String']>;
  current_position?: InputMaybe<Current_Positions_Obj_Rel_Insert_Input>;
  demo?: InputMaybe<Scalars['numeric']>;
  hash?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['String']>;
  leverage?: InputMaybe<Scalars['Int']>;
  margin_free?: InputMaybe<Scalars['money']>;
  nickname?: InputMaybe<Scalars['String']>;
  positions_snapshot?: InputMaybe<Positions_Snapshot_Obj_Rel_Insert_Input>;
  stop?: InputMaybe<Scalars['Boolean']>;
  team_gold_members?: InputMaybe<Team_Gold_Member_Arr_Rel_Insert_Input>;
  trade_mode?: InputMaybe<Scalars['String']>;
  webhook_discord?: InputMaybe<Scalars['String']>;
  webhook_slack?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Gold_Users_Max_Fields = {
  __typename?: 'gold_users_max_fields';
  broker?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  demo?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['String']>;
  leverage?: Maybe<Scalars['Int']>;
  margin_free?: Maybe<Scalars['money']>;
  nickname?: Maybe<Scalars['String']>;
  trade_mode?: Maybe<Scalars['String']>;
  webhook_discord?: Maybe<Scalars['String']>;
  webhook_slack?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Gold_Users_Min_Fields = {
  __typename?: 'gold_users_min_fields';
  broker?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  demo?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['String']>;
  leverage?: Maybe<Scalars['Int']>;
  margin_free?: Maybe<Scalars['money']>;
  nickname?: Maybe<Scalars['String']>;
  trade_mode?: Maybe<Scalars['String']>;
  webhook_discord?: Maybe<Scalars['String']>;
  webhook_slack?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "gold_users" */
export type Gold_Users_Mutation_Response = {
  __typename?: 'gold_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gold_Users>;
};

/** input type for inserting object relation for remote table "gold_users" */
export type Gold_Users_Obj_Rel_Insert_Input = {
  data: Gold_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Gold_Users_On_Conflict>;
};

/** on_conflict condition type for table "gold_users" */
export type Gold_Users_On_Conflict = {
  constraint: Gold_Users_Constraint;
  update_columns?: Array<Gold_Users_Update_Column>;
  where?: InputMaybe<Gold_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "gold_users". */
export type Gold_Users_Order_By = {
  broker?: InputMaybe<Order_By>;
  channel?: InputMaybe<Order_By>;
  copy_users_aggregate?: InputMaybe<Copy_Users_Aggregate_Order_By>;
  currency?: InputMaybe<Order_By>;
  current_position?: InputMaybe<Current_Positions_Order_By>;
  demo?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  leverage?: InputMaybe<Order_By>;
  margin_free?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  positions_snapshot?: InputMaybe<Positions_Snapshot_Order_By>;
  stop?: InputMaybe<Order_By>;
  team_gold_members_aggregate?: InputMaybe<Team_Gold_Member_Aggregate_Order_By>;
  trade_mode?: InputMaybe<Order_By>;
  webhook_discord?: InputMaybe<Order_By>;
  webhook_slack?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gold_users */
export type Gold_Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "gold_users" */
export type Gold_Users_Select_Column =
  /** column name */
  | 'broker'
  /** column name */
  | 'channel'
  /** column name */
  | 'currency'
  /** column name */
  | 'demo'
  /** column name */
  | 'hash'
  /** column name */
  | 'id'
  /** column name */
  | 'leverage'
  /** column name */
  | 'margin_free'
  /** column name */
  | 'nickname'
  /** column name */
  | 'stop'
  /** column name */
  | 'trade_mode'
  /** column name */
  | 'webhook_discord'
  /** column name */
  | 'webhook_slack';

/** input type for updating data in table "gold_users" */
export type Gold_Users_Set_Input = {
  broker?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  demo?: InputMaybe<Scalars['numeric']>;
  hash?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['String']>;
  leverage?: InputMaybe<Scalars['Int']>;
  margin_free?: InputMaybe<Scalars['money']>;
  nickname?: InputMaybe<Scalars['String']>;
  stop?: InputMaybe<Scalars['Boolean']>;
  trade_mode?: InputMaybe<Scalars['String']>;
  webhook_discord?: InputMaybe<Scalars['String']>;
  webhook_slack?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Gold_Users_Stddev_Fields = {
  __typename?: 'gold_users_stddev_fields';
  demo?: Maybe<Scalars['Float']>;
  leverage?: Maybe<Scalars['Float']>;
  margin_free?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Gold_Users_Stddev_Pop_Fields = {
  __typename?: 'gold_users_stddev_pop_fields';
  demo?: Maybe<Scalars['Float']>;
  leverage?: Maybe<Scalars['Float']>;
  margin_free?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Gold_Users_Stddev_Samp_Fields = {
  __typename?: 'gold_users_stddev_samp_fields';
  demo?: Maybe<Scalars['Float']>;
  leverage?: Maybe<Scalars['Float']>;
  margin_free?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Gold_Users_Sum_Fields = {
  __typename?: 'gold_users_sum_fields';
  demo?: Maybe<Scalars['numeric']>;
  leverage?: Maybe<Scalars['Int']>;
  margin_free?: Maybe<Scalars['money']>;
};

/** update columns of table "gold_users" */
export type Gold_Users_Update_Column =
  /** column name */
  | 'broker'
  /** column name */
  | 'channel'
  /** column name */
  | 'currency'
  /** column name */
  | 'demo'
  /** column name */
  | 'hash'
  /** column name */
  | 'id'
  /** column name */
  | 'leverage'
  /** column name */
  | 'margin_free'
  /** column name */
  | 'nickname'
  /** column name */
  | 'stop'
  /** column name */
  | 'trade_mode'
  /** column name */
  | 'webhook_discord'
  /** column name */
  | 'webhook_slack';

/** aggregate var_pop on columns */
export type Gold_Users_Var_Pop_Fields = {
  __typename?: 'gold_users_var_pop_fields';
  demo?: Maybe<Scalars['Float']>;
  leverage?: Maybe<Scalars['Float']>;
  margin_free?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Gold_Users_Var_Samp_Fields = {
  __typename?: 'gold_users_var_samp_fields';
  demo?: Maybe<Scalars['Float']>;
  leverage?: Maybe<Scalars['Float']>;
  margin_free?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Gold_Users_Variance_Fields = {
  __typename?: 'gold_users_variance_fields';
  demo?: Maybe<Scalars['Float']>;
  leverage?: Maybe<Scalars['Float']>;
  margin_free?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "invoices" */
export type Invoices = {
  __typename?: 'invoices';
  invoice_number?: Maybe<Scalars['String']>;
  team_id: Scalars['String'];
  /** An object relationship */
  team_member?: Maybe<Team_Member>;
  user_id: Scalars['String'];
};

/** aggregated selection of "invoices" */
export type Invoices_Aggregate = {
  __typename?: 'invoices_aggregate';
  aggregate?: Maybe<Invoices_Aggregate_Fields>;
  nodes: Array<Invoices>;
};

/** aggregate fields of "invoices" */
export type Invoices_Aggregate_Fields = {
  __typename?: 'invoices_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invoices_Max_Fields>;
  min?: Maybe<Invoices_Min_Fields>;
};


/** aggregate fields of "invoices" */
export type Invoices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invoices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "invoices". All fields are combined with a logical 'AND'. */
export type Invoices_Bool_Exp = {
  _and?: InputMaybe<Array<Invoices_Bool_Exp>>;
  _not?: InputMaybe<Invoices_Bool_Exp>;
  _or?: InputMaybe<Array<Invoices_Bool_Exp>>;
  invoice_number?: InputMaybe<String_Comparison_Exp>;
  team_id?: InputMaybe<String_Comparison_Exp>;
  team_member?: InputMaybe<Team_Member_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "invoices" */
export type Invoices_Constraint =
  /** unique or primary key constraint */
  | 'invoices_pkey';

/** input type for inserting data into table "invoices" */
export type Invoices_Insert_Input = {
  invoice_number?: InputMaybe<Scalars['String']>;
  team_id?: InputMaybe<Scalars['String']>;
  team_member?: InputMaybe<Team_Member_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Invoices_Max_Fields = {
  __typename?: 'invoices_max_fields';
  invoice_number?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Invoices_Min_Fields = {
  __typename?: 'invoices_min_fields';
  invoice_number?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "invoices" */
export type Invoices_Mutation_Response = {
  __typename?: 'invoices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invoices>;
};

/** input type for inserting object relation for remote table "invoices" */
export type Invoices_Obj_Rel_Insert_Input = {
  data: Invoices_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Invoices_On_Conflict>;
};

/** on_conflict condition type for table "invoices" */
export type Invoices_On_Conflict = {
  constraint: Invoices_Constraint;
  update_columns?: Array<Invoices_Update_Column>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};

/** Ordering options when selecting data from "invoices". */
export type Invoices_Order_By = {
  invoice_number?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_member?: InputMaybe<Team_Member_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: invoices */
export type Invoices_Pk_Columns_Input = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "invoices" */
export type Invoices_Select_Column =
  /** column name */
  | 'invoice_number'
  /** column name */
  | 'team_id'
  /** column name */
  | 'user_id';

/** input type for updating data in table "invoices" */
export type Invoices_Set_Input = {
  invoice_number?: InputMaybe<Scalars['String']>;
  team_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "invoices" */
export type Invoices_Update_Column =
  /** column name */
  | 'invoice_number'
  /** column name */
  | 'team_id'
  /** column name */
  | 'user_id';

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "conferences" */
  delete_conferences?: Maybe<Conferences_Mutation_Response>;
  /** delete single row from the table: "conferences" */
  delete_conferences_by_pk?: Maybe<Conferences>;
  /** delete data from the table: "copy_users" */
  delete_copy_users?: Maybe<Copy_Users_Mutation_Response>;
  /** delete single row from the table: "copy_users" */
  delete_copy_users_by_pk?: Maybe<Copy_Users>;
  /** delete data from the table: "current_positions" */
  delete_current_positions?: Maybe<Current_Positions_Mutation_Response>;
  /** delete single row from the table: "current_positions" */
  delete_current_positions_by_pk?: Maybe<Current_Positions>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "entries" */
  delete_entries?: Maybe<Entries_Mutation_Response>;
  /** delete single row from the table: "entries" */
  delete_entries_by_pk?: Maybe<Entries>;
  /** delete data from the table: "gold_users" */
  delete_gold_users?: Maybe<Gold_Users_Mutation_Response>;
  /** delete single row from the table: "gold_users" */
  delete_gold_users_by_pk?: Maybe<Gold_Users>;
  /** delete data from the table: "invoices" */
  delete_invoices?: Maybe<Invoices_Mutation_Response>;
  /** delete single row from the table: "invoices" */
  delete_invoices_by_pk?: Maybe<Invoices>;
  /** delete data from the table: "positions" */
  delete_positions?: Maybe<Positions_Mutation_Response>;
  /** delete single row from the table: "positions" */
  delete_positions_by_pk?: Maybe<Positions>;
  /** delete data from the table: "positions_snapshot" */
  delete_positions_snapshot?: Maybe<Positions_Snapshot_Mutation_Response>;
  /** delete single row from the table: "positions_snapshot" */
  delete_positions_snapshot_by_pk?: Maybe<Positions_Snapshot>;
  /** delete data from the table: "team_gold_member" */
  delete_team_gold_member?: Maybe<Team_Gold_Member_Mutation_Response>;
  /** delete single row from the table: "team_gold_member" */
  delete_team_gold_member_by_pk?: Maybe<Team_Gold_Member>;
  /** delete data from the table: "team_member" */
  delete_team_member?: Maybe<Team_Member_Mutation_Response>;
  /** delete single row from the table: "team_member" */
  delete_team_member_by_pk?: Maybe<Team_Member>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "test" */
  delete_test?: Maybe<Test_Mutation_Response>;
  /** delete single row from the table: "test" */
  delete_test_by_pk?: Maybe<Test>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "video_contents_master" */
  delete_video_contents_master?: Maybe<Video_Contents_Master_Mutation_Response>;
  /** delete single row from the table: "video_contents_master" */
  delete_video_contents_master_by_pk?: Maybe<Video_Contents_Master>;
  /** delete data from the table: "video_pages" */
  delete_video_pages?: Maybe<Video_Pages_Mutation_Response>;
  /** delete single row from the table: "video_pages" */
  delete_video_pages_by_pk?: Maybe<Video_Pages>;
  /** delete data from the table: "video_recommended_contents" */
  delete_video_recommended_contents?: Maybe<Video_Recommended_Contents_Mutation_Response>;
  /** delete single row from the table: "video_recommended_contents" */
  delete_video_recommended_contents_by_pk?: Maybe<Video_Recommended_Contents>;
  /** insert data into the table: "conferences" */
  insert_conferences?: Maybe<Conferences_Mutation_Response>;
  /** insert a single row into the table: "conferences" */
  insert_conferences_one?: Maybe<Conferences>;
  /** insert data into the table: "copy_users" */
  insert_copy_users?: Maybe<Copy_Users_Mutation_Response>;
  /** insert a single row into the table: "copy_users" */
  insert_copy_users_one?: Maybe<Copy_Users>;
  /** insert data into the table: "current_positions" */
  insert_current_positions?: Maybe<Current_Positions_Mutation_Response>;
  /** insert a single row into the table: "current_positions" */
  insert_current_positions_one?: Maybe<Current_Positions>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "entries" */
  insert_entries?: Maybe<Entries_Mutation_Response>;
  /** insert a single row into the table: "entries" */
  insert_entries_one?: Maybe<Entries>;
  /** insert data into the table: "gold_users" */
  insert_gold_users?: Maybe<Gold_Users_Mutation_Response>;
  /** insert a single row into the table: "gold_users" */
  insert_gold_users_one?: Maybe<Gold_Users>;
  /** insert data into the table: "invoices" */
  insert_invoices?: Maybe<Invoices_Mutation_Response>;
  /** insert a single row into the table: "invoices" */
  insert_invoices_one?: Maybe<Invoices>;
  /** insert data into the table: "positions" */
  insert_positions?: Maybe<Positions_Mutation_Response>;
  /** insert a single row into the table: "positions" */
  insert_positions_one?: Maybe<Positions>;
  /** insert data into the table: "positions_snapshot" */
  insert_positions_snapshot?: Maybe<Positions_Snapshot_Mutation_Response>;
  /** insert a single row into the table: "positions_snapshot" */
  insert_positions_snapshot_one?: Maybe<Positions_Snapshot>;
  /** insert data into the table: "team_gold_member" */
  insert_team_gold_member?: Maybe<Team_Gold_Member_Mutation_Response>;
  /** insert a single row into the table: "team_gold_member" */
  insert_team_gold_member_one?: Maybe<Team_Gold_Member>;
  /** insert data into the table: "team_member" */
  insert_team_member?: Maybe<Team_Member_Mutation_Response>;
  /** insert a single row into the table: "team_member" */
  insert_team_member_one?: Maybe<Team_Member>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "test" */
  insert_test?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test" */
  insert_test_one?: Maybe<Test>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "video_contents_master" */
  insert_video_contents_master?: Maybe<Video_Contents_Master_Mutation_Response>;
  /** insert a single row into the table: "video_contents_master" */
  insert_video_contents_master_one?: Maybe<Video_Contents_Master>;
  /** insert data into the table: "video_pages" */
  insert_video_pages?: Maybe<Video_Pages_Mutation_Response>;
  /** insert a single row into the table: "video_pages" */
  insert_video_pages_one?: Maybe<Video_Pages>;
  /** insert data into the table: "video_recommended_contents" */
  insert_video_recommended_contents?: Maybe<Video_Recommended_Contents_Mutation_Response>;
  /** insert a single row into the table: "video_recommended_contents" */
  insert_video_recommended_contents_one?: Maybe<Video_Recommended_Contents>;
  /** update data of the table: "conferences" */
  update_conferences?: Maybe<Conferences_Mutation_Response>;
  /** update single row of the table: "conferences" */
  update_conferences_by_pk?: Maybe<Conferences>;
  /** update data of the table: "copy_users" */
  update_copy_users?: Maybe<Copy_Users_Mutation_Response>;
  /** update single row of the table: "copy_users" */
  update_copy_users_by_pk?: Maybe<Copy_Users>;
  /** update data of the table: "current_positions" */
  update_current_positions?: Maybe<Current_Positions_Mutation_Response>;
  /** update single row of the table: "current_positions" */
  update_current_positions_by_pk?: Maybe<Current_Positions>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "entries" */
  update_entries?: Maybe<Entries_Mutation_Response>;
  /** update single row of the table: "entries" */
  update_entries_by_pk?: Maybe<Entries>;
  /** update data of the table: "gold_users" */
  update_gold_users?: Maybe<Gold_Users_Mutation_Response>;
  /** update single row of the table: "gold_users" */
  update_gold_users_by_pk?: Maybe<Gold_Users>;
  /** update data of the table: "invoices" */
  update_invoices?: Maybe<Invoices_Mutation_Response>;
  /** update single row of the table: "invoices" */
  update_invoices_by_pk?: Maybe<Invoices>;
  /** update data of the table: "positions" */
  update_positions?: Maybe<Positions_Mutation_Response>;
  /** update single row of the table: "positions" */
  update_positions_by_pk?: Maybe<Positions>;
  /** update data of the table: "positions_snapshot" */
  update_positions_snapshot?: Maybe<Positions_Snapshot_Mutation_Response>;
  /** update single row of the table: "positions_snapshot" */
  update_positions_snapshot_by_pk?: Maybe<Positions_Snapshot>;
  /** update data of the table: "team_gold_member" */
  update_team_gold_member?: Maybe<Team_Gold_Member_Mutation_Response>;
  /** update single row of the table: "team_gold_member" */
  update_team_gold_member_by_pk?: Maybe<Team_Gold_Member>;
  /** update data of the table: "team_member" */
  update_team_member?: Maybe<Team_Member_Mutation_Response>;
  /** update single row of the table: "team_member" */
  update_team_member_by_pk?: Maybe<Team_Member>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update data of the table: "test" */
  update_test?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test" */
  update_test_by_pk?: Maybe<Test>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "video_contents_master" */
  update_video_contents_master?: Maybe<Video_Contents_Master_Mutation_Response>;
  /** update single row of the table: "video_contents_master" */
  update_video_contents_master_by_pk?: Maybe<Video_Contents_Master>;
  /** update data of the table: "video_pages" */
  update_video_pages?: Maybe<Video_Pages_Mutation_Response>;
  /** update single row of the table: "video_pages" */
  update_video_pages_by_pk?: Maybe<Video_Pages>;
  /** update data of the table: "video_recommended_contents" */
  update_video_recommended_contents?: Maybe<Video_Recommended_Contents_Mutation_Response>;
  /** update single row of the table: "video_recommended_contents" */
  update_video_recommended_contents_by_pk?: Maybe<Video_Recommended_Contents>;
};


/** mutation root */
export type Mutation_RootDelete_ConferencesArgs = {
  where: Conferences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Conferences_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Copy_UsersArgs = {
  where: Copy_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Copy_Users_By_PkArgs = {
  gold_user_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Current_PositionsArgs = {
  where: Current_Positions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Current_Positions_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_EntriesArgs = {
  where: Entries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entries_By_PkArgs = {
  entry_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Gold_UsersArgs = {
  where: Gold_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gold_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_InvoicesArgs = {
  where: Invoices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invoices_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PositionsArgs = {
  where: Positions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Positions_By_PkArgs = {
  md5: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Positions_SnapshotArgs = {
  where: Positions_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Positions_Snapshot_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Team_Gold_MemberArgs = {
  where: Team_Gold_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Gold_Member_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Team_MemberArgs = {
  where: Team_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Member_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TestArgs = {
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
  id: Scalars['String'];
  id2: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Video_Contents_MasterArgs = {
  where: Video_Contents_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Video_Contents_Master_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Video_PagesArgs = {
  where: Video_Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Video_Pages_By_PkArgs = {
  page_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Video_Recommended_ContentsArgs = {
  where: Video_Recommended_Contents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Video_Recommended_Contents_By_PkArgs = {
  recommended_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ConferencesArgs = {
  objects: Array<Conferences_Insert_Input>;
  on_conflict?: InputMaybe<Conferences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conferences_OneArgs = {
  object: Conferences_Insert_Input;
  on_conflict?: InputMaybe<Conferences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Copy_UsersArgs = {
  objects: Array<Copy_Users_Insert_Input>;
  on_conflict?: InputMaybe<Copy_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Copy_Users_OneArgs = {
  object: Copy_Users_Insert_Input;
  on_conflict?: InputMaybe<Copy_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Current_PositionsArgs = {
  objects: Array<Current_Positions_Insert_Input>;
  on_conflict?: InputMaybe<Current_Positions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Current_Positions_OneArgs = {
  object: Current_Positions_Insert_Input;
  on_conflict?: InputMaybe<Current_Positions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EntriesArgs = {
  objects: Array<Entries_Insert_Input>;
  on_conflict?: InputMaybe<Entries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entries_OneArgs = {
  object: Entries_Insert_Input;
  on_conflict?: InputMaybe<Entries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gold_UsersArgs = {
  objects: Array<Gold_Users_Insert_Input>;
  on_conflict?: InputMaybe<Gold_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gold_Users_OneArgs = {
  object: Gold_Users_Insert_Input;
  on_conflict?: InputMaybe<Gold_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InvoicesArgs = {
  objects: Array<Invoices_Insert_Input>;
  on_conflict?: InputMaybe<Invoices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invoices_OneArgs = {
  object: Invoices_Insert_Input;
  on_conflict?: InputMaybe<Invoices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PositionsArgs = {
  objects: Array<Positions_Insert_Input>;
  on_conflict?: InputMaybe<Positions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Positions_OneArgs = {
  object: Positions_Insert_Input;
  on_conflict?: InputMaybe<Positions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Positions_SnapshotArgs = {
  objects: Array<Positions_Snapshot_Insert_Input>;
  on_conflict?: InputMaybe<Positions_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Positions_Snapshot_OneArgs = {
  object: Positions_Snapshot_Insert_Input;
  on_conflict?: InputMaybe<Positions_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Gold_MemberArgs = {
  objects: Array<Team_Gold_Member_Insert_Input>;
  on_conflict?: InputMaybe<Team_Gold_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Gold_Member_OneArgs = {
  object: Team_Gold_Member_Insert_Input;
  on_conflict?: InputMaybe<Team_Gold_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_MemberArgs = {
  objects: Array<Team_Member_Insert_Input>;
  on_conflict?: InputMaybe<Team_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Member_OneArgs = {
  object: Team_Member_Insert_Input;
  on_conflict?: InputMaybe<Team_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
  object: Teams_Insert_Input;
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
  object: Test_Insert_Input;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Video_Contents_MasterArgs = {
  objects: Array<Video_Contents_Master_Insert_Input>;
  on_conflict?: InputMaybe<Video_Contents_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Video_Contents_Master_OneArgs = {
  object: Video_Contents_Master_Insert_Input;
  on_conflict?: InputMaybe<Video_Contents_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Video_PagesArgs = {
  objects: Array<Video_Pages_Insert_Input>;
  on_conflict?: InputMaybe<Video_Pages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Video_Pages_OneArgs = {
  object: Video_Pages_Insert_Input;
  on_conflict?: InputMaybe<Video_Pages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Video_Recommended_ContentsArgs = {
  objects: Array<Video_Recommended_Contents_Insert_Input>;
  on_conflict?: InputMaybe<Video_Recommended_Contents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Video_Recommended_Contents_OneArgs = {
  object: Video_Recommended_Contents_Insert_Input;
  on_conflict?: InputMaybe<Video_Recommended_Contents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ConferencesArgs = {
  _set?: InputMaybe<Conferences_Set_Input>;
  where: Conferences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Conferences_By_PkArgs = {
  _set?: InputMaybe<Conferences_Set_Input>;
  pk_columns: Conferences_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Copy_UsersArgs = {
  _set?: InputMaybe<Copy_Users_Set_Input>;
  where: Copy_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Copy_Users_By_PkArgs = {
  _set?: InputMaybe<Copy_Users_Set_Input>;
  pk_columns: Copy_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Current_PositionsArgs = {
  _inc?: InputMaybe<Current_Positions_Inc_Input>;
  _set?: InputMaybe<Current_Positions_Set_Input>;
  where: Current_Positions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Current_Positions_By_PkArgs = {
  _inc?: InputMaybe<Current_Positions_Inc_Input>;
  _set?: InputMaybe<Current_Positions_Set_Input>;
  pk_columns: Current_Positions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EntriesArgs = {
  _set?: InputMaybe<Entries_Set_Input>;
  where: Entries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entries_By_PkArgs = {
  _set?: InputMaybe<Entries_Set_Input>;
  pk_columns: Entries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gold_UsersArgs = {
  _inc?: InputMaybe<Gold_Users_Inc_Input>;
  _set?: InputMaybe<Gold_Users_Set_Input>;
  where: Gold_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gold_Users_By_PkArgs = {
  _inc?: InputMaybe<Gold_Users_Inc_Input>;
  _set?: InputMaybe<Gold_Users_Set_Input>;
  pk_columns: Gold_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InvoicesArgs = {
  _set?: InputMaybe<Invoices_Set_Input>;
  where: Invoices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invoices_By_PkArgs = {
  _set?: InputMaybe<Invoices_Set_Input>;
  pk_columns: Invoices_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PositionsArgs = {
  _set?: InputMaybe<Positions_Set_Input>;
  where: Positions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Positions_By_PkArgs = {
  _set?: InputMaybe<Positions_Set_Input>;
  pk_columns: Positions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Positions_SnapshotArgs = {
  _set?: InputMaybe<Positions_Snapshot_Set_Input>;
  where: Positions_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Positions_Snapshot_By_PkArgs = {
  _set?: InputMaybe<Positions_Snapshot_Set_Input>;
  pk_columns: Positions_Snapshot_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Gold_MemberArgs = {
  _set?: InputMaybe<Team_Gold_Member_Set_Input>;
  where: Team_Gold_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Gold_Member_By_PkArgs = {
  _set?: InputMaybe<Team_Gold_Member_Set_Input>;
  pk_columns: Team_Gold_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_MemberArgs = {
  _set?: InputMaybe<Team_Member_Set_Input>;
  where: Team_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Member_By_PkArgs = {
  _set?: InputMaybe<Team_Member_Set_Input>;
  pk_columns: Team_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _set?: InputMaybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
  _set?: InputMaybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Video_Contents_MasterArgs = {
  _set?: InputMaybe<Video_Contents_Master_Set_Input>;
  where: Video_Contents_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Video_Contents_Master_By_PkArgs = {
  _set?: InputMaybe<Video_Contents_Master_Set_Input>;
  pk_columns: Video_Contents_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Video_PagesArgs = {
  _inc?: InputMaybe<Video_Pages_Inc_Input>;
  _set?: InputMaybe<Video_Pages_Set_Input>;
  where: Video_Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Video_Pages_By_PkArgs = {
  _inc?: InputMaybe<Video_Pages_Inc_Input>;
  _set?: InputMaybe<Video_Pages_Set_Input>;
  pk_columns: Video_Pages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Video_Recommended_ContentsArgs = {
  _set?: InputMaybe<Video_Recommended_Contents_Set_Input>;
  where: Video_Recommended_Contents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Video_Recommended_Contents_By_PkArgs = {
  _set?: InputMaybe<Video_Recommended_Contents_Set_Input>;
  pk_columns: Video_Recommended_Contents_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "positions" */
export type Positions = {
  __typename?: 'positions';
  body?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  md5: Scalars['String'];
  /** An array relationship */
  team_gold_member: Array<Team_Gold_Member>;
  /** An aggregate relationship */
  team_gold_member_aggregate: Team_Gold_Member_Aggregate;
  user_id: Scalars['String'];
};


/** columns and relationships of "positions" */
export type PositionsTeam_Gold_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


/** columns and relationships of "positions" */
export type PositionsTeam_Gold_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};

/** aggregated selection of "positions" */
export type Positions_Aggregate = {
  __typename?: 'positions_aggregate';
  aggregate?: Maybe<Positions_Aggregate_Fields>;
  nodes: Array<Positions>;
};

/** aggregate fields of "positions" */
export type Positions_Aggregate_Fields = {
  __typename?: 'positions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Positions_Max_Fields>;
  min?: Maybe<Positions_Min_Fields>;
};


/** aggregate fields of "positions" */
export type Positions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Positions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "positions". All fields are combined with a logical 'AND'. */
export type Positions_Bool_Exp = {
  _and?: InputMaybe<Array<Positions_Bool_Exp>>;
  _not?: InputMaybe<Positions_Bool_Exp>;
  _or?: InputMaybe<Array<Positions_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  md5?: InputMaybe<String_Comparison_Exp>;
  team_gold_member?: InputMaybe<Team_Gold_Member_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "positions" */
export type Positions_Constraint =
  /** unique or primary key constraint */
  | 'positions_pkey';

/** input type for inserting data into table "positions" */
export type Positions_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  md5?: InputMaybe<Scalars['String']>;
  team_gold_member?: InputMaybe<Team_Gold_Member_Arr_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Positions_Max_Fields = {
  __typename?: 'positions_max_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  md5?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Positions_Min_Fields = {
  __typename?: 'positions_min_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  md5?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "positions" */
export type Positions_Mutation_Response = {
  __typename?: 'positions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Positions>;
};

/** on_conflict condition type for table "positions" */
export type Positions_On_Conflict = {
  constraint: Positions_Constraint;
  update_columns?: Array<Positions_Update_Column>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** Ordering options when selecting data from "positions". */
export type Positions_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  md5?: InputMaybe<Order_By>;
  team_gold_member_aggregate?: InputMaybe<Team_Gold_Member_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: positions */
export type Positions_Pk_Columns_Input = {
  md5: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "positions" */
export type Positions_Select_Column =
  /** column name */
  | 'body'
  /** column name */
  | 'created_at'
  /** column name */
  | 'md5'
  /** column name */
  | 'user_id';

/** input type for updating data in table "positions" */
export type Positions_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  md5?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "positions_snapshot" */
export type Positions_Snapshot = {
  __typename?: 'positions_snapshot';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled: Scalars['Boolean'];
  /** An object relationship */
  gold_user: Gold_Users;
  md5: Scalars['String'];
  /** An array relationship */
  team_gold_member: Array<Team_Gold_Member>;
  /** An aggregate relationship */
  team_gold_member_aggregate: Team_Gold_Member_Aggregate;
  user_id: Scalars['String'];
};


/** columns and relationships of "positions_snapshot" */
export type Positions_SnapshotTeam_Gold_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


/** columns and relationships of "positions_snapshot" */
export type Positions_SnapshotTeam_Gold_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};

/** aggregated selection of "positions_snapshot" */
export type Positions_Snapshot_Aggregate = {
  __typename?: 'positions_snapshot_aggregate';
  aggregate?: Maybe<Positions_Snapshot_Aggregate_Fields>;
  nodes: Array<Positions_Snapshot>;
};

/** aggregate fields of "positions_snapshot" */
export type Positions_Snapshot_Aggregate_Fields = {
  __typename?: 'positions_snapshot_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Positions_Snapshot_Max_Fields>;
  min?: Maybe<Positions_Snapshot_Min_Fields>;
};


/** aggregate fields of "positions_snapshot" */
export type Positions_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Positions_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "positions_snapshot". All fields are combined with a logical 'AND'. */
export type Positions_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Positions_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Positions_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Positions_Snapshot_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  gold_user?: InputMaybe<Gold_Users_Bool_Exp>;
  md5?: InputMaybe<String_Comparison_Exp>;
  team_gold_member?: InputMaybe<Team_Gold_Member_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "positions_snapshot" */
export type Positions_Snapshot_Constraint =
  /** unique or primary key constraint */
  | 'positions_snapshot_pkey';

/** input type for inserting data into table "positions_snapshot" */
export type Positions_Snapshot_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  gold_user?: InputMaybe<Gold_Users_Obj_Rel_Insert_Input>;
  md5?: InputMaybe<Scalars['String']>;
  team_gold_member?: InputMaybe<Team_Gold_Member_Arr_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Positions_Snapshot_Max_Fields = {
  __typename?: 'positions_snapshot_max_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  md5?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Positions_Snapshot_Min_Fields = {
  __typename?: 'positions_snapshot_min_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  md5?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "positions_snapshot" */
export type Positions_Snapshot_Mutation_Response = {
  __typename?: 'positions_snapshot_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Positions_Snapshot>;
};

/** input type for inserting object relation for remote table "positions_snapshot" */
export type Positions_Snapshot_Obj_Rel_Insert_Input = {
  data: Positions_Snapshot_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Positions_Snapshot_On_Conflict>;
};

/** on_conflict condition type for table "positions_snapshot" */
export type Positions_Snapshot_On_Conflict = {
  constraint: Positions_Snapshot_Constraint;
  update_columns?: Array<Positions_Snapshot_Update_Column>;
  where?: InputMaybe<Positions_Snapshot_Bool_Exp>;
};

/** Ordering options when selecting data from "positions_snapshot". */
export type Positions_Snapshot_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  disabled?: InputMaybe<Order_By>;
  gold_user?: InputMaybe<Gold_Users_Order_By>;
  md5?: InputMaybe<Order_By>;
  team_gold_member_aggregate?: InputMaybe<Team_Gold_Member_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: positions_snapshot */
export type Positions_Snapshot_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "positions_snapshot" */
export type Positions_Snapshot_Select_Column =
  /** column name */
  | 'body'
  /** column name */
  | 'created_at'
  /** column name */
  | 'disabled'
  /** column name */
  | 'md5'
  /** column name */
  | 'user_id';

/** input type for updating data in table "positions_snapshot" */
export type Positions_Snapshot_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  md5?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "positions_snapshot" */
export type Positions_Snapshot_Update_Column =
  /** column name */
  | 'body'
  /** column name */
  | 'created_at'
  /** column name */
  | 'disabled'
  /** column name */
  | 'md5'
  /** column name */
  | 'user_id';

/** update columns of table "positions" */
export type Positions_Update_Column =
  /** column name */
  | 'body'
  /** column name */
  | 'created_at'
  /** column name */
  | 'md5'
  /** column name */
  | 'user_id';

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "conferences" */
  conferences: Array<Conferences>;
  /** fetch aggregated fields from the table: "conferences" */
  conferences_aggregate: Conferences_Aggregate;
  /** fetch data from the table: "conferences" using primary key columns */
  conferences_by_pk?: Maybe<Conferences>;
  /** An array relationship */
  copy_users: Array<Copy_Users>;
  /** An aggregate relationship */
  copy_users_aggregate: Copy_Users_Aggregate;
  /** fetch data from the table: "copy_users" using primary key columns */
  copy_users_by_pk?: Maybe<Copy_Users>;
  /** fetch data from the table: "current_positions" */
  current_positions: Array<Current_Positions>;
  /** fetch aggregated fields from the table: "current_positions" */
  current_positions_aggregate: Current_Positions_Aggregate;
  /** fetch data from the table: "current_positions" using primary key columns */
  current_positions_by_pk?: Maybe<Current_Positions>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "entries" */
  entries: Array<Entries>;
  /** fetch aggregated fields from the table: "entries" */
  entries_aggregate: Entries_Aggregate;
  /** fetch data from the table: "entries" using primary key columns */
  entries_by_pk?: Maybe<Entries>;
  /** fetch data from the table: "gold_users" */
  gold_users: Array<Gold_Users>;
  /** fetch aggregated fields from the table: "gold_users" */
  gold_users_aggregate: Gold_Users_Aggregate;
  /** fetch data from the table: "gold_users" using primary key columns */
  gold_users_by_pk?: Maybe<Gold_Users>;
  /** fetch data from the table: "invoices" */
  invoices: Array<Invoices>;
  /** fetch aggregated fields from the table: "invoices" */
  invoices_aggregate: Invoices_Aggregate;
  /** fetch data from the table: "invoices" using primary key columns */
  invoices_by_pk?: Maybe<Invoices>;
  /** fetch data from the table: "positions" */
  positions: Array<Positions>;
  /** fetch aggregated fields from the table: "positions" */
  positions_aggregate: Positions_Aggregate;
  /** fetch data from the table: "positions" using primary key columns */
  positions_by_pk?: Maybe<Positions>;
  /** fetch data from the table: "positions_snapshot" */
  positions_snapshot: Array<Positions_Snapshot>;
  /** fetch aggregated fields from the table: "positions_snapshot" */
  positions_snapshot_aggregate: Positions_Snapshot_Aggregate;
  /** fetch data from the table: "positions_snapshot" using primary key columns */
  positions_snapshot_by_pk?: Maybe<Positions_Snapshot>;
  /** An array relationship */
  team_gold_member: Array<Team_Gold_Member>;
  /** An aggregate relationship */
  team_gold_member_aggregate: Team_Gold_Member_Aggregate;
  /** fetch data from the table: "team_gold_member" using primary key columns */
  team_gold_member_by_pk?: Maybe<Team_Gold_Member>;
  /** An array relationship */
  team_member: Array<Team_Member>;
  /** An aggregate relationship */
  team_member_aggregate: Team_Member_Aggregate;
  /** fetch data from the table: "team_member" using primary key columns */
  team_member_by_pk?: Maybe<Team_Member>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "video_contents_master" */
  video_contents_master: Array<Video_Contents_Master>;
  /** fetch aggregated fields from the table: "video_contents_master" */
  video_contents_master_aggregate: Video_Contents_Master_Aggregate;
  /** fetch data from the table: "video_contents_master" using primary key columns */
  video_contents_master_by_pk?: Maybe<Video_Contents_Master>;
  /** fetch data from the table: "video_pages" */
  video_pages: Array<Video_Pages>;
  /** fetch aggregated fields from the table: "video_pages" */
  video_pages_aggregate: Video_Pages_Aggregate;
  /** fetch data from the table: "video_pages" using primary key columns */
  video_pages_by_pk?: Maybe<Video_Pages>;
  /** fetch data from the table: "video_recommended_contents" */
  video_recommended_contents: Array<Video_Recommended_Contents>;
  /** fetch aggregated fields from the table: "video_recommended_contents" */
  video_recommended_contents_aggregate: Video_Recommended_Contents_Aggregate;
  /** fetch data from the table: "video_recommended_contents" using primary key columns */
  video_recommended_contents_by_pk?: Maybe<Video_Recommended_Contents>;
};


export type Query_RootConferencesArgs = {
  distinct_on?: InputMaybe<Array<Conferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conferences_Order_By>>;
  where?: InputMaybe<Conferences_Bool_Exp>;
};


export type Query_RootConferences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conferences_Order_By>>;
  where?: InputMaybe<Conferences_Bool_Exp>;
};


export type Query_RootConferences_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootCopy_UsersArgs = {
  distinct_on?: InputMaybe<Array<Copy_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Copy_Users_Order_By>>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};


export type Query_RootCopy_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Copy_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Copy_Users_Order_By>>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};


export type Query_RootCopy_Users_By_PkArgs = {
  gold_user_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootCurrent_PositionsArgs = {
  distinct_on?: InputMaybe<Array<Current_Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Current_Positions_Order_By>>;
  where?: InputMaybe<Current_Positions_Bool_Exp>;
};


export type Query_RootCurrent_Positions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Current_Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Current_Positions_Order_By>>;
  where?: InputMaybe<Current_Positions_Bool_Exp>;
};


export type Query_RootCurrent_Positions_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootEntriesArgs = {
  distinct_on?: InputMaybe<Array<Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entries_Order_By>>;
  where?: InputMaybe<Entries_Bool_Exp>;
};


export type Query_RootEntries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entries_Order_By>>;
  where?: InputMaybe<Entries_Bool_Exp>;
};


export type Query_RootEntries_By_PkArgs = {
  entry_id: Scalars['bpchar'];
};


export type Query_RootGold_UsersArgs = {
  distinct_on?: InputMaybe<Array<Gold_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gold_Users_Order_By>>;
  where?: InputMaybe<Gold_Users_Bool_Exp>;
};


export type Query_RootGold_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gold_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gold_Users_Order_By>>;
  where?: InputMaybe<Gold_Users_Bool_Exp>;
};


export type Query_RootGold_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootInvoicesArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


export type Query_RootInvoices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


export type Query_RootInvoices_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};


export type Query_RootPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};


export type Query_RootPositions_By_PkArgs = {
  md5: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootPositions_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Positions_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Positions_Snapshot_Order_By>>;
  where?: InputMaybe<Positions_Snapshot_Bool_Exp>;
};


export type Query_RootPositions_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Positions_Snapshot_Order_By>>;
  where?: InputMaybe<Positions_Snapshot_Bool_Exp>;
};


export type Query_RootPositions_Snapshot_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Query_RootTeam_Gold_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


export type Query_RootTeam_Gold_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


export type Query_RootTeam_Gold_Member_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootTeam_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Query_RootTeam_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Query_RootTeam_Member_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest_By_PkArgs = {
  id: Scalars['String'];
  id2: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootVideo_Contents_MasterArgs = {
  distinct_on?: InputMaybe<Array<Video_Contents_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Contents_Master_Order_By>>;
  where?: InputMaybe<Video_Contents_Master_Bool_Exp>;
};


export type Query_RootVideo_Contents_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Contents_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Contents_Master_Order_By>>;
  where?: InputMaybe<Video_Contents_Master_Bool_Exp>;
};


export type Query_RootVideo_Contents_Master_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootVideo_PagesArgs = {
  distinct_on?: InputMaybe<Array<Video_Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Pages_Order_By>>;
  where?: InputMaybe<Video_Pages_Bool_Exp>;
};


export type Query_RootVideo_Pages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Pages_Order_By>>;
  where?: InputMaybe<Video_Pages_Bool_Exp>;
};


export type Query_RootVideo_Pages_By_PkArgs = {
  page_id: Scalars['String'];
};


export type Query_RootVideo_Recommended_ContentsArgs = {
  distinct_on?: InputMaybe<Array<Video_Recommended_Contents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Recommended_Contents_Order_By>>;
  where?: InputMaybe<Video_Recommended_Contents_Bool_Exp>;
};


export type Query_RootVideo_Recommended_Contents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recommended_Contents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Recommended_Contents_Order_By>>;
  where?: InputMaybe<Video_Recommended_Contents_Bool_Exp>;
};


export type Query_RootVideo_Recommended_Contents_By_PkArgs = {
  recommended_id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "conferences" */
  conferences: Array<Conferences>;
  /** fetch aggregated fields from the table: "conferences" */
  conferences_aggregate: Conferences_Aggregate;
  /** fetch data from the table: "conferences" using primary key columns */
  conferences_by_pk?: Maybe<Conferences>;
  /** An array relationship */
  copy_users: Array<Copy_Users>;
  /** An aggregate relationship */
  copy_users_aggregate: Copy_Users_Aggregate;
  /** fetch data from the table: "copy_users" using primary key columns */
  copy_users_by_pk?: Maybe<Copy_Users>;
  /** fetch data from the table: "current_positions" */
  current_positions: Array<Current_Positions>;
  /** fetch aggregated fields from the table: "current_positions" */
  current_positions_aggregate: Current_Positions_Aggregate;
  /** fetch data from the table: "current_positions" using primary key columns */
  current_positions_by_pk?: Maybe<Current_Positions>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "entries" */
  entries: Array<Entries>;
  /** fetch aggregated fields from the table: "entries" */
  entries_aggregate: Entries_Aggregate;
  /** fetch data from the table: "entries" using primary key columns */
  entries_by_pk?: Maybe<Entries>;
  /** fetch data from the table: "gold_users" */
  gold_users: Array<Gold_Users>;
  /** fetch aggregated fields from the table: "gold_users" */
  gold_users_aggregate: Gold_Users_Aggregate;
  /** fetch data from the table: "gold_users" using primary key columns */
  gold_users_by_pk?: Maybe<Gold_Users>;
  /** fetch data from the table: "invoices" */
  invoices: Array<Invoices>;
  /** fetch aggregated fields from the table: "invoices" */
  invoices_aggregate: Invoices_Aggregate;
  /** fetch data from the table: "invoices" using primary key columns */
  invoices_by_pk?: Maybe<Invoices>;
  /** fetch data from the table: "positions" */
  positions: Array<Positions>;
  /** fetch aggregated fields from the table: "positions" */
  positions_aggregate: Positions_Aggregate;
  /** fetch data from the table: "positions" using primary key columns */
  positions_by_pk?: Maybe<Positions>;
  /** fetch data from the table: "positions_snapshot" */
  positions_snapshot: Array<Positions_Snapshot>;
  /** fetch aggregated fields from the table: "positions_snapshot" */
  positions_snapshot_aggregate: Positions_Snapshot_Aggregate;
  /** fetch data from the table: "positions_snapshot" using primary key columns */
  positions_snapshot_by_pk?: Maybe<Positions_Snapshot>;
  /** An array relationship */
  team_gold_member: Array<Team_Gold_Member>;
  /** An aggregate relationship */
  team_gold_member_aggregate: Team_Gold_Member_Aggregate;
  /** fetch data from the table: "team_gold_member" using primary key columns */
  team_gold_member_by_pk?: Maybe<Team_Gold_Member>;
  /** An array relationship */
  team_member: Array<Team_Member>;
  /** An aggregate relationship */
  team_member_aggregate: Team_Member_Aggregate;
  /** fetch data from the table: "team_member" using primary key columns */
  team_member_by_pk?: Maybe<Team_Member>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "video_contents_master" */
  video_contents_master: Array<Video_Contents_Master>;
  /** fetch aggregated fields from the table: "video_contents_master" */
  video_contents_master_aggregate: Video_Contents_Master_Aggregate;
  /** fetch data from the table: "video_contents_master" using primary key columns */
  video_contents_master_by_pk?: Maybe<Video_Contents_Master>;
  /** fetch data from the table: "video_pages" */
  video_pages: Array<Video_Pages>;
  /** fetch aggregated fields from the table: "video_pages" */
  video_pages_aggregate: Video_Pages_Aggregate;
  /** fetch data from the table: "video_pages" using primary key columns */
  video_pages_by_pk?: Maybe<Video_Pages>;
  /** fetch data from the table: "video_recommended_contents" */
  video_recommended_contents: Array<Video_Recommended_Contents>;
  /** fetch aggregated fields from the table: "video_recommended_contents" */
  video_recommended_contents_aggregate: Video_Recommended_Contents_Aggregate;
  /** fetch data from the table: "video_recommended_contents" using primary key columns */
  video_recommended_contents_by_pk?: Maybe<Video_Recommended_Contents>;
};


export type Subscription_RootConferencesArgs = {
  distinct_on?: InputMaybe<Array<Conferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conferences_Order_By>>;
  where?: InputMaybe<Conferences_Bool_Exp>;
};


export type Subscription_RootConferences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conferences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conferences_Order_By>>;
  where?: InputMaybe<Conferences_Bool_Exp>;
};


export type Subscription_RootConferences_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootCopy_UsersArgs = {
  distinct_on?: InputMaybe<Array<Copy_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Copy_Users_Order_By>>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};


export type Subscription_RootCopy_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Copy_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Copy_Users_Order_By>>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};


export type Subscription_RootCopy_Users_By_PkArgs = {
  gold_user_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootCurrent_PositionsArgs = {
  distinct_on?: InputMaybe<Array<Current_Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Current_Positions_Order_By>>;
  where?: InputMaybe<Current_Positions_Bool_Exp>;
};


export type Subscription_RootCurrent_Positions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Current_Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Current_Positions_Order_By>>;
  where?: InputMaybe<Current_Positions_Bool_Exp>;
};


export type Subscription_RootCurrent_Positions_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootEntriesArgs = {
  distinct_on?: InputMaybe<Array<Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entries_Order_By>>;
  where?: InputMaybe<Entries_Bool_Exp>;
};


export type Subscription_RootEntries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entries_Order_By>>;
  where?: InputMaybe<Entries_Bool_Exp>;
};


export type Subscription_RootEntries_By_PkArgs = {
  entry_id: Scalars['bpchar'];
};


export type Subscription_RootGold_UsersArgs = {
  distinct_on?: InputMaybe<Array<Gold_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gold_Users_Order_By>>;
  where?: InputMaybe<Gold_Users_Bool_Exp>;
};


export type Subscription_RootGold_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gold_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gold_Users_Order_By>>;
  where?: InputMaybe<Gold_Users_Bool_Exp>;
};


export type Subscription_RootGold_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootInvoicesArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


export type Subscription_RootInvoices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


export type Subscription_RootInvoices_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};


export type Subscription_RootPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};


export type Subscription_RootPositions_By_PkArgs = {
  md5: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootPositions_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Positions_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Positions_Snapshot_Order_By>>;
  where?: InputMaybe<Positions_Snapshot_Bool_Exp>;
};


export type Subscription_RootPositions_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Positions_Snapshot_Order_By>>;
  where?: InputMaybe<Positions_Snapshot_Bool_Exp>;
};


export type Subscription_RootPositions_Snapshot_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Subscription_RootTeam_Gold_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


export type Subscription_RootTeam_Gold_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


export type Subscription_RootTeam_Gold_Member_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootTeam_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Subscription_RootTeam_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Subscription_RootTeam_Member_By_PkArgs = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['String'];
  id2: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootVideo_Contents_MasterArgs = {
  distinct_on?: InputMaybe<Array<Video_Contents_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Contents_Master_Order_By>>;
  where?: InputMaybe<Video_Contents_Master_Bool_Exp>;
};


export type Subscription_RootVideo_Contents_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Contents_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Contents_Master_Order_By>>;
  where?: InputMaybe<Video_Contents_Master_Bool_Exp>;
};


export type Subscription_RootVideo_Contents_Master_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootVideo_PagesArgs = {
  distinct_on?: InputMaybe<Array<Video_Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Pages_Order_By>>;
  where?: InputMaybe<Video_Pages_Bool_Exp>;
};


export type Subscription_RootVideo_Pages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Pages_Order_By>>;
  where?: InputMaybe<Video_Pages_Bool_Exp>;
};


export type Subscription_RootVideo_Pages_By_PkArgs = {
  page_id: Scalars['String'];
};


export type Subscription_RootVideo_Recommended_ContentsArgs = {
  distinct_on?: InputMaybe<Array<Video_Recommended_Contents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Recommended_Contents_Order_By>>;
  where?: InputMaybe<Video_Recommended_Contents_Bool_Exp>;
};


export type Subscription_RootVideo_Recommended_Contents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recommended_Contents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Video_Recommended_Contents_Order_By>>;
  where?: InputMaybe<Video_Recommended_Contents_Bool_Exp>;
};


export type Subscription_RootVideo_Recommended_Contents_By_PkArgs = {
  recommended_id: Scalars['String'];
};

/** columns and relationships of "team_gold_member" */
export type Team_Gold_Member = {
  __typename?: 'team_gold_member';
  /** An object relationship */
  gold_user: Gold_Users;
  /** An object relationship */
  team: Teams;
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** aggregated selection of "team_gold_member" */
export type Team_Gold_Member_Aggregate = {
  __typename?: 'team_gold_member_aggregate';
  aggregate?: Maybe<Team_Gold_Member_Aggregate_Fields>;
  nodes: Array<Team_Gold_Member>;
};

/** aggregate fields of "team_gold_member" */
export type Team_Gold_Member_Aggregate_Fields = {
  __typename?: 'team_gold_member_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Team_Gold_Member_Max_Fields>;
  min?: Maybe<Team_Gold_Member_Min_Fields>;
};


/** aggregate fields of "team_gold_member" */
export type Team_Gold_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_gold_member" */
export type Team_Gold_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Gold_Member_Max_Order_By>;
  min?: InputMaybe<Team_Gold_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team_gold_member" */
export type Team_Gold_Member_Arr_Rel_Insert_Input = {
  data: Array<Team_Gold_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_Gold_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "team_gold_member". All fields are combined with a logical 'AND'. */
export type Team_Gold_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Gold_Member_Bool_Exp>>;
  _not?: InputMaybe<Team_Gold_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Gold_Member_Bool_Exp>>;
  gold_user?: InputMaybe<Gold_Users_Bool_Exp>;
  team?: InputMaybe<Teams_Bool_Exp>;
  team_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_gold_member" */
export type Team_Gold_Member_Constraint =
  /** unique or primary key constraint */
  | 'team_gold_member_pkey';

/** input type for inserting data into table "team_gold_member" */
export type Team_Gold_Member_Insert_Input = {
  gold_user?: InputMaybe<Gold_Users_Obj_Rel_Insert_Input>;
  team?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Team_Gold_Member_Max_Fields = {
  __typename?: 'team_gold_member_max_fields';
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "team_gold_member" */
export type Team_Gold_Member_Max_Order_By = {
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Gold_Member_Min_Fields = {
  __typename?: 'team_gold_member_min_fields';
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "team_gold_member" */
export type Team_Gold_Member_Min_Order_By = {
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "team_gold_member" */
export type Team_Gold_Member_Mutation_Response = {
  __typename?: 'team_gold_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Team_Gold_Member>;
};

/** on_conflict condition type for table "team_gold_member" */
export type Team_Gold_Member_On_Conflict = {
  constraint: Team_Gold_Member_Constraint;
  update_columns?: Array<Team_Gold_Member_Update_Column>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "team_gold_member". */
export type Team_Gold_Member_Order_By = {
  gold_user?: InputMaybe<Gold_Users_Order_By>;
  team?: InputMaybe<Teams_Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: team_gold_member */
export type Team_Gold_Member_Pk_Columns_Input = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "team_gold_member" */
export type Team_Gold_Member_Select_Column =
  /** column name */
  | 'team_id'
  /** column name */
  | 'user_id';

/** input type for updating data in table "team_gold_member" */
export type Team_Gold_Member_Set_Input = {
  team_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "team_gold_member" */
export type Team_Gold_Member_Update_Column =
  /** column name */
  | 'team_id'
  /** column name */
  | 'user_id';

/** columns and relationships of "team_member" */
export type Team_Member = {
  __typename?: 'team_member';
  /** An object relationship */
  customer?: Maybe<Customers>;
  /** An object relationship */
  invoice?: Maybe<Invoices>;
  invoice_number?: Maybe<Scalars['String']>;
  /** An object relationship */
  team: Teams;
  team_id: Scalars['String'];
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  /** An object relationship */
  teams_rel?: Maybe<Teams>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};


/** columns and relationships of "team_member" */
export type Team_MemberTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


/** columns and relationships of "team_member" */
export type Team_MemberTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};

/** aggregated selection of "team_member" */
export type Team_Member_Aggregate = {
  __typename?: 'team_member_aggregate';
  aggregate?: Maybe<Team_Member_Aggregate_Fields>;
  nodes: Array<Team_Member>;
};

/** aggregate fields of "team_member" */
export type Team_Member_Aggregate_Fields = {
  __typename?: 'team_member_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Team_Member_Max_Fields>;
  min?: Maybe<Team_Member_Min_Fields>;
};


/** aggregate fields of "team_member" */
export type Team_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_member" */
export type Team_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Member_Max_Order_By>;
  min?: InputMaybe<Team_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team_member" */
export type Team_Member_Arr_Rel_Insert_Input = {
  data: Array<Team_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "team_member". All fields are combined with a logical 'AND'. */
export type Team_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Member_Bool_Exp>>;
  _not?: InputMaybe<Team_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Member_Bool_Exp>>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  invoice?: InputMaybe<Invoices_Bool_Exp>;
  invoice_number?: InputMaybe<String_Comparison_Exp>;
  team?: InputMaybe<Teams_Bool_Exp>;
  team_id?: InputMaybe<String_Comparison_Exp>;
  teams?: InputMaybe<Teams_Bool_Exp>;
  teams_rel?: InputMaybe<Teams_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_member" */
export type Team_Member_Constraint =
  /** unique or primary key constraint */
  | 'team_member_pkey';

/** input type for inserting data into table "team_member" */
export type Team_Member_Insert_Input = {
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  invoice?: InputMaybe<Invoices_Obj_Rel_Insert_Input>;
  invoice_number?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['String']>;
  teams?: InputMaybe<Teams_Arr_Rel_Insert_Input>;
  teams_rel?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Team_Member_Max_Fields = {
  __typename?: 'team_member_max_fields';
  invoice_number?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "team_member" */
export type Team_Member_Max_Order_By = {
  invoice_number?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Member_Min_Fields = {
  __typename?: 'team_member_min_fields';
  invoice_number?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "team_member" */
export type Team_Member_Min_Order_By = {
  invoice_number?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "team_member" */
export type Team_Member_Mutation_Response = {
  __typename?: 'team_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Team_Member>;
};

/** input type for inserting object relation for remote table "team_member" */
export type Team_Member_Obj_Rel_Insert_Input = {
  data: Team_Member_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_Member_On_Conflict>;
};

/** on_conflict condition type for table "team_member" */
export type Team_Member_On_Conflict = {
  constraint: Team_Member_Constraint;
  update_columns?: Array<Team_Member_Update_Column>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "team_member". */
export type Team_Member_Order_By = {
  customer?: InputMaybe<Customers_Order_By>;
  invoice?: InputMaybe<Invoices_Order_By>;
  invoice_number?: InputMaybe<Order_By>;
  team?: InputMaybe<Teams_Order_By>;
  team_id?: InputMaybe<Order_By>;
  teams_aggregate?: InputMaybe<Teams_Aggregate_Order_By>;
  teams_rel?: InputMaybe<Teams_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: team_member */
export type Team_Member_Pk_Columns_Input = {
  team_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "team_member" */
export type Team_Member_Select_Column =
  /** column name */
  | 'invoice_number'
  /** column name */
  | 'team_id'
  /** column name */
  | 'user_id';

/** input type for updating data in table "team_member" */
export type Team_Member_Set_Input = {
  invoice_number?: InputMaybe<Scalars['String']>;
  team_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "team_member" */
export type Team_Member_Update_Column =
  /** column name */
  | 'invoice_number'
  /** column name */
  | 'team_id'
  /** column name */
  | 'user_id';

/** columns and relationships of "teams" */
export type Teams = {
  __typename?: 'teams';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  team_gold_members: Array<Team_Gold_Member>;
  /** An aggregate relationship */
  team_gold_members_aggregate: Team_Gold_Member_Aggregate;
  /** An array relationship */
  team_members: Array<Team_Member>;
  /** An aggregate relationship */
  team_members_aggregate: Team_Member_Aggregate;
  /** An object relationship */
  to_team_member?: Maybe<Team_Member>;
};


/** columns and relationships of "teams" */
export type TeamsTeam_Gold_MembersArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsTeam_Gold_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Gold_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Gold_Member_Order_By>>;
  where?: InputMaybe<Team_Gold_Member_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsTeam_MembersArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsTeam_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
  __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'teams_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
};


/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teams_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Teams_Max_Order_By>;
  min?: InputMaybe<Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: InputMaybe<Array<Teams_Bool_Exp>>;
  _not?: InputMaybe<Teams_Bool_Exp>;
  _or?: InputMaybe<Array<Teams_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  team_gold_members?: InputMaybe<Team_Gold_Member_Bool_Exp>;
  team_members?: InputMaybe<Team_Member_Bool_Exp>;
  to_team_member?: InputMaybe<Team_Member_Bool_Exp>;
};

/** unique or primary key constraints on table "teams" */
export type Teams_Constraint =
  /** unique or primary key constraint */
  | 'teams_pkey';

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  team_gold_members?: InputMaybe<Team_Gold_Member_Arr_Rel_Insert_Input>;
  team_members?: InputMaybe<Team_Member_Arr_Rel_Insert_Input>;
  to_team_member?: InputMaybe<Team_Member_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};

/** on_conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns?: Array<Teams_Update_Column>;
  where?: InputMaybe<Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "teams". */
export type Teams_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  team_gold_members_aggregate?: InputMaybe<Team_Gold_Member_Aggregate_Order_By>;
  team_members_aggregate?: InputMaybe<Team_Member_Aggregate_Order_By>;
  to_team_member?: InputMaybe<Team_Member_Order_By>;
};

/** primary key columns input for table: teams */
export type Teams_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "teams" */
export type Teams_Select_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'name';

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "teams" */
export type Teams_Update_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'name';

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  body?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  id2: Scalars['String'];
};

/** aggregated selection of "test" */
export type Test_Aggregate = {
  __typename?: 'test_aggregate';
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  __typename?: 'test_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
};


/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  id2?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export type Test_Constraint =
  /** unique or primary key constraint */
  | 'test_pkey';

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id2?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  body?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id2?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  body?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id2?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on_conflict condition type for table "test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  body?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id2?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['String'];
  id2: Scalars['String'];
};

/** select columns of table "test" */
export type Test_Select_Column =
  /** column name */
  | 'body'
  /** column name */
  | 'hash'
  /** column name */
  | 'id'
  /** column name */
  | 'id2';

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id2?: InputMaybe<Scalars['String']>;
};

/** update columns of table "test" */
export type Test_Update_Column =
  /** column name */
  | 'body'
  /** column name */
  | 'hash'
  /** column name */
  | 'id'
  /** column name */
  | 'id2';

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  copy_users: Array<Copy_Users>;
  /** An aggregate relationship */
  copy_users_aggregate: Copy_Users_Aggregate;
  hash?: Maybe<Scalars['bytea']>;
  id: Scalars['String'];
  locked?: Maybe<Scalars['Int']>;
  /** An array relationship */
  team_members: Array<Team_Member>;
  /** An aggregate relationship */
  team_members_aggregate: Team_Member_Aggregate;
};


/** columns and relationships of "users" */
export type UsersCopy_UsersArgs = {
  distinct_on?: InputMaybe<Array<Copy_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Copy_Users_Order_By>>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCopy_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Copy_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Copy_Users_Order_By>>;
  where?: InputMaybe<Copy_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTeam_MembersArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTeam_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  locked?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  copy_users?: InputMaybe<Copy_Users_Bool_Exp>;
  hash?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  locked?: InputMaybe<Int_Comparison_Exp>;
  team_members?: InputMaybe<Team_Member_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint */
  | 'users_hash_key'
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  locked?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  copy_users?: InputMaybe<Copy_Users_Arr_Rel_Insert_Input>;
  hash?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['String']>;
  locked?: InputMaybe<Scalars['Int']>;
  team_members?: InputMaybe<Team_Member_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['String']>;
  locked?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['String']>;
  locked?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  copy_users_aggregate?: InputMaybe<Copy_Users_Aggregate_Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  team_members_aggregate?: InputMaybe<Team_Member_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export type Users_Select_Column =
  /** column name */
  | 'hash'
  /** column name */
  | 'id'
  /** column name */
  | 'locked';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  hash?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['String']>;
  locked?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  locked?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  locked?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  locked?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  locked?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'hash'
  /** column name */
  | 'id'
  /** column name */
  | 'locked';

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  locked?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  locked?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  locked?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "video_contents_master" */
export type Video_Contents_Master = {
  __typename?: 'video_contents_master';
  category_id?: Maybe<Scalars['String']>;
  contents_id: Scalars['String'];
  create_date?: Maybe<Scalars['timestamp']>;
  flex?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  previewsize?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tmb?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** An object relationship */
  video_recommended_content?: Maybe<Video_Recommended_Contents>;
  videotype?: Maybe<Scalars['String']>;
};

/** aggregated selection of "video_contents_master" */
export type Video_Contents_Master_Aggregate = {
  __typename?: 'video_contents_master_aggregate';
  aggregate?: Maybe<Video_Contents_Master_Aggregate_Fields>;
  nodes: Array<Video_Contents_Master>;
};

/** aggregate fields of "video_contents_master" */
export type Video_Contents_Master_Aggregate_Fields = {
  __typename?: 'video_contents_master_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Video_Contents_Master_Max_Fields>;
  min?: Maybe<Video_Contents_Master_Min_Fields>;
};


/** aggregate fields of "video_contents_master" */
export type Video_Contents_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Video_Contents_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "video_contents_master". All fields are combined with a logical 'AND'. */
export type Video_Contents_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Contents_Master_Bool_Exp>>;
  _not?: InputMaybe<Video_Contents_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Contents_Master_Bool_Exp>>;
  category_id?: InputMaybe<String_Comparison_Exp>;
  contents_id?: InputMaybe<String_Comparison_Exp>;
  create_date?: InputMaybe<Timestamp_Comparison_Exp>;
  flex?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  previewsize?: InputMaybe<String_Comparison_Exp>;
  src?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  tmb?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  video_recommended_content?: InputMaybe<Video_Recommended_Contents_Bool_Exp>;
  videotype?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "video_contents_master" */
export type Video_Contents_Master_Constraint =
  /** unique or primary key constraint */
  | 'video_contents_master_contents_id_key'
  /** unique or primary key constraint */
  | 'video_contents_master_pkey';

/** input type for inserting data into table "video_contents_master" */
export type Video_Contents_Master_Insert_Input = {
  category_id?: InputMaybe<Scalars['String']>;
  contents_id?: InputMaybe<Scalars['String']>;
  create_date?: InputMaybe<Scalars['timestamp']>;
  flex?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  previewsize?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tmb?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  video_recommended_content?: InputMaybe<Video_Recommended_Contents_Obj_Rel_Insert_Input>;
  videotype?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Video_Contents_Master_Max_Fields = {
  __typename?: 'video_contents_master_max_fields';
  category_id?: Maybe<Scalars['String']>;
  contents_id?: Maybe<Scalars['String']>;
  create_date?: Maybe<Scalars['timestamp']>;
  flex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  previewsize?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tmb?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  videotype?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Video_Contents_Master_Min_Fields = {
  __typename?: 'video_contents_master_min_fields';
  category_id?: Maybe<Scalars['String']>;
  contents_id?: Maybe<Scalars['String']>;
  create_date?: Maybe<Scalars['timestamp']>;
  flex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  previewsize?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tmb?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  videotype?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "video_contents_master" */
export type Video_Contents_Master_Mutation_Response = {
  __typename?: 'video_contents_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Video_Contents_Master>;
};

/** input type for inserting object relation for remote table "video_contents_master" */
export type Video_Contents_Master_Obj_Rel_Insert_Input = {
  data: Video_Contents_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Video_Contents_Master_On_Conflict>;
};

/** on_conflict condition type for table "video_contents_master" */
export type Video_Contents_Master_On_Conflict = {
  constraint: Video_Contents_Master_Constraint;
  update_columns?: Array<Video_Contents_Master_Update_Column>;
  where?: InputMaybe<Video_Contents_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "video_contents_master". */
export type Video_Contents_Master_Order_By = {
  category_id?: InputMaybe<Order_By>;
  contents_id?: InputMaybe<Order_By>;
  create_date?: InputMaybe<Order_By>;
  flex?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  previewsize?: InputMaybe<Order_By>;
  src?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tmb?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  video_recommended_content?: InputMaybe<Video_Recommended_Contents_Order_By>;
  videotype?: InputMaybe<Order_By>;
};

/** primary key columns input for table: video_contents_master */
export type Video_Contents_Master_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "video_contents_master" */
export type Video_Contents_Master_Select_Column =
  /** column name */
  | 'category_id'
  /** column name */
  | 'contents_id'
  /** column name */
  | 'create_date'
  /** column name */
  | 'flex'
  /** column name */
  | 'id'
  /** column name */
  | 'previewsize'
  /** column name */
  | 'src'
  /** column name */
  | 'title'
  /** column name */
  | 'tmb'
  /** column name */
  | 'url'
  /** column name */
  | 'videotype';

/** input type for updating data in table "video_contents_master" */
export type Video_Contents_Master_Set_Input = {
  category_id?: InputMaybe<Scalars['String']>;
  contents_id?: InputMaybe<Scalars['String']>;
  create_date?: InputMaybe<Scalars['timestamp']>;
  flex?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  previewsize?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tmb?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  videotype?: InputMaybe<Scalars['String']>;
};

/** update columns of table "video_contents_master" */
export type Video_Contents_Master_Update_Column =
  /** column name */
  | 'category_id'
  /** column name */
  | 'contents_id'
  /** column name */
  | 'create_date'
  /** column name */
  | 'flex'
  /** column name */
  | 'id'
  /** column name */
  | 'previewsize'
  /** column name */
  | 'src'
  /** column name */
  | 'title'
  /** column name */
  | 'tmb'
  /** column name */
  | 'url'
  /** column name */
  | 'videotype';

/** columns and relationships of "video_pages" */
export type Video_Pages = {
  __typename?: 'video_pages';
  base_path?: Maybe<Scalars['String']>;
  category_id: Scalars['String'];
  enabled?: Maybe<Scalars['String']>;
  full_path?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  page_id: Scalars['String'];
  page_name?: Maybe<Scalars['String']>;
  page_order?: Maybe<Scalars['Int']>;
  page_tag: Scalars['String'];
};

/** aggregated selection of "video_pages" */
export type Video_Pages_Aggregate = {
  __typename?: 'video_pages_aggregate';
  aggregate?: Maybe<Video_Pages_Aggregate_Fields>;
  nodes: Array<Video_Pages>;
};

/** aggregate fields of "video_pages" */
export type Video_Pages_Aggregate_Fields = {
  __typename?: 'video_pages_aggregate_fields';
  avg?: Maybe<Video_Pages_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Video_Pages_Max_Fields>;
  min?: Maybe<Video_Pages_Min_Fields>;
  stddev?: Maybe<Video_Pages_Stddev_Fields>;
  stddev_pop?: Maybe<Video_Pages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Video_Pages_Stddev_Samp_Fields>;
  sum?: Maybe<Video_Pages_Sum_Fields>;
  var_pop?: Maybe<Video_Pages_Var_Pop_Fields>;
  var_samp?: Maybe<Video_Pages_Var_Samp_Fields>;
  variance?: Maybe<Video_Pages_Variance_Fields>;
};


/** aggregate fields of "video_pages" */
export type Video_Pages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Video_Pages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Video_Pages_Avg_Fields = {
  __typename?: 'video_pages_avg_fields';
  page_order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "video_pages". All fields are combined with a logical 'AND'. */
export type Video_Pages_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Pages_Bool_Exp>>;
  _not?: InputMaybe<Video_Pages_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Pages_Bool_Exp>>;
  base_path?: InputMaybe<String_Comparison_Exp>;
  category_id?: InputMaybe<String_Comparison_Exp>;
  enabled?: InputMaybe<String_Comparison_Exp>;
  full_path?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  page_id?: InputMaybe<String_Comparison_Exp>;
  page_name?: InputMaybe<String_Comparison_Exp>;
  page_order?: InputMaybe<Int_Comparison_Exp>;
  page_tag?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "video_pages" */
export type Video_Pages_Constraint =
  /** unique or primary key constraint */
  | 'video_pages_pkey';

/** input type for incrementing numeric columns in table "video_pages" */
export type Video_Pages_Inc_Input = {
  page_order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "video_pages" */
export type Video_Pages_Insert_Input = {
  base_path?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['String']>;
  full_path?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  page_id?: InputMaybe<Scalars['String']>;
  page_name?: InputMaybe<Scalars['String']>;
  page_order?: InputMaybe<Scalars['Int']>;
  page_tag?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Video_Pages_Max_Fields = {
  __typename?: 'video_pages_max_fields';
  base_path?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['String']>;
  full_path?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  page_id?: Maybe<Scalars['String']>;
  page_name?: Maybe<Scalars['String']>;
  page_order?: Maybe<Scalars['Int']>;
  page_tag?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Video_Pages_Min_Fields = {
  __typename?: 'video_pages_min_fields';
  base_path?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['String']>;
  full_path?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  page_id?: Maybe<Scalars['String']>;
  page_name?: Maybe<Scalars['String']>;
  page_order?: Maybe<Scalars['Int']>;
  page_tag?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "video_pages" */
export type Video_Pages_Mutation_Response = {
  __typename?: 'video_pages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Video_Pages>;
};

/** on_conflict condition type for table "video_pages" */
export type Video_Pages_On_Conflict = {
  constraint: Video_Pages_Constraint;
  update_columns?: Array<Video_Pages_Update_Column>;
  where?: InputMaybe<Video_Pages_Bool_Exp>;
};

/** Ordering options when selecting data from "video_pages". */
export type Video_Pages_Order_By = {
  base_path?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  enabled?: InputMaybe<Order_By>;
  full_path?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  page_id?: InputMaybe<Order_By>;
  page_name?: InputMaybe<Order_By>;
  page_order?: InputMaybe<Order_By>;
  page_tag?: InputMaybe<Order_By>;
};

/** primary key columns input for table: video_pages */
export type Video_Pages_Pk_Columns_Input = {
  page_id: Scalars['String'];
};

/** select columns of table "video_pages" */
export type Video_Pages_Select_Column =
  /** column name */
  | 'base_path'
  /** column name */
  | 'category_id'
  /** column name */
  | 'enabled'
  /** column name */
  | 'full_path'
  /** column name */
  | 'icon'
  /** column name */
  | 'page_id'
  /** column name */
  | 'page_name'
  /** column name */
  | 'page_order'
  /** column name */
  | 'page_tag';

/** input type for updating data in table "video_pages" */
export type Video_Pages_Set_Input = {
  base_path?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['String']>;
  full_path?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  page_id?: InputMaybe<Scalars['String']>;
  page_name?: InputMaybe<Scalars['String']>;
  page_order?: InputMaybe<Scalars['Int']>;
  page_tag?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Video_Pages_Stddev_Fields = {
  __typename?: 'video_pages_stddev_fields';
  page_order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Video_Pages_Stddev_Pop_Fields = {
  __typename?: 'video_pages_stddev_pop_fields';
  page_order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Video_Pages_Stddev_Samp_Fields = {
  __typename?: 'video_pages_stddev_samp_fields';
  page_order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Video_Pages_Sum_Fields = {
  __typename?: 'video_pages_sum_fields';
  page_order?: Maybe<Scalars['Int']>;
};

/** update columns of table "video_pages" */
export type Video_Pages_Update_Column =
  /** column name */
  | 'base_path'
  /** column name */
  | 'category_id'
  /** column name */
  | 'enabled'
  /** column name */
  | 'full_path'
  /** column name */
  | 'icon'
  /** column name */
  | 'page_id'
  /** column name */
  | 'page_name'
  /** column name */
  | 'page_order'
  /** column name */
  | 'page_tag';

/** aggregate var_pop on columns */
export type Video_Pages_Var_Pop_Fields = {
  __typename?: 'video_pages_var_pop_fields';
  page_order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Video_Pages_Var_Samp_Fields = {
  __typename?: 'video_pages_var_samp_fields';
  page_order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Video_Pages_Variance_Fields = {
  __typename?: 'video_pages_variance_fields';
  page_order?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "video_recommended_contents" */
export type Video_Recommended_Contents = {
  __typename?: 'video_recommended_contents';
  recommended_id: Scalars['String'];
  /** An object relationship */
  video_contents_master: Video_Contents_Master;
};

/** aggregated selection of "video_recommended_contents" */
export type Video_Recommended_Contents_Aggregate = {
  __typename?: 'video_recommended_contents_aggregate';
  aggregate?: Maybe<Video_Recommended_Contents_Aggregate_Fields>;
  nodes: Array<Video_Recommended_Contents>;
};

/** aggregate fields of "video_recommended_contents" */
export type Video_Recommended_Contents_Aggregate_Fields = {
  __typename?: 'video_recommended_contents_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Video_Recommended_Contents_Max_Fields>;
  min?: Maybe<Video_Recommended_Contents_Min_Fields>;
};


/** aggregate fields of "video_recommended_contents" */
export type Video_Recommended_Contents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Video_Recommended_Contents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "video_recommended_contents". All fields are combined with a logical 'AND'. */
export type Video_Recommended_Contents_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Recommended_Contents_Bool_Exp>>;
  _not?: InputMaybe<Video_Recommended_Contents_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Recommended_Contents_Bool_Exp>>;
  recommended_id?: InputMaybe<String_Comparison_Exp>;
  video_contents_master?: InputMaybe<Video_Contents_Master_Bool_Exp>;
};

/** unique or primary key constraints on table "video_recommended_contents" */
export type Video_Recommended_Contents_Constraint =
  /** unique or primary key constraint */
  | 'video_recommended_contents_pkey';

/** input type for inserting data into table "video_recommended_contents" */
export type Video_Recommended_Contents_Insert_Input = {
  recommended_id?: InputMaybe<Scalars['String']>;
  video_contents_master?: InputMaybe<Video_Contents_Master_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Video_Recommended_Contents_Max_Fields = {
  __typename?: 'video_recommended_contents_max_fields';
  recommended_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Video_Recommended_Contents_Min_Fields = {
  __typename?: 'video_recommended_contents_min_fields';
  recommended_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "video_recommended_contents" */
export type Video_Recommended_Contents_Mutation_Response = {
  __typename?: 'video_recommended_contents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Video_Recommended_Contents>;
};

/** input type for inserting object relation for remote table "video_recommended_contents" */
export type Video_Recommended_Contents_Obj_Rel_Insert_Input = {
  data: Video_Recommended_Contents_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Video_Recommended_Contents_On_Conflict>;
};

/** on_conflict condition type for table "video_recommended_contents" */
export type Video_Recommended_Contents_On_Conflict = {
  constraint: Video_Recommended_Contents_Constraint;
  update_columns?: Array<Video_Recommended_Contents_Update_Column>;
  where?: InputMaybe<Video_Recommended_Contents_Bool_Exp>;
};

/** Ordering options when selecting data from "video_recommended_contents". */
export type Video_Recommended_Contents_Order_By = {
  recommended_id?: InputMaybe<Order_By>;
  video_contents_master?: InputMaybe<Video_Contents_Master_Order_By>;
};

/** primary key columns input for table: video_recommended_contents */
export type Video_Recommended_Contents_Pk_Columns_Input = {
  recommended_id: Scalars['String'];
};

/** select columns of table "video_recommended_contents" */
export type Video_Recommended_Contents_Select_Column =
  /** column name */
  | 'recommended_id';

/** input type for updating data in table "video_recommended_contents" */
export type Video_Recommended_Contents_Set_Input = {
  recommended_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "video_recommended_contents" */
export type Video_Recommended_Contents_Update_Column =
  /** column name */
  | 'recommended_id';

export type TestQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQueryQuery = { __typename?: 'query_root', test: Array<{ __typename?: 'test', id: string }> };

export type GetUserIdQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUserIdQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string }> };

export type TeamNameOfMatchQueryVariables = Exact<{
  team_id: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type TeamNameOfMatchQuery = { __typename?: 'query_root', teams: Array<{ __typename?: 'teams', name?: string | null, description?: string | null }> };

export type MatchedTeamNameQueryVariables = Exact<{
  team_id: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type MatchedTeamNameQuery = { __typename?: 'query_root', team_member_by_pk?: { __typename?: 'team_member', team: { __typename?: 'teams', description?: string | null, name?: string | null } } | null };

export type UserIdInTeamMemberQueryVariables = Exact<{
  team_id: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type UserIdInTeamMemberQuery = { __typename?: 'query_root', team_member_by_pk?: { __typename?: 'team_member', user_id: string } | null };

export type TeamGoldMemberQueryVariables = Exact<{
  team_id: Scalars['String'];
}>;


export type TeamGoldMemberQuery = { __typename?: 'query_root', team_gold_member: Array<{ __typename?: 'team_gold_member', user_id: string }> };

export type PositionsSnapshotQueryVariables = Exact<{
  team_id: Scalars['String'];
}>;


export type PositionsSnapshotQuery = { __typename?: 'query_root', positions_snapshot: Array<{ __typename?: 'positions_snapshot', user_id: string, md5: string, body?: string | null, created_at?: any | null, disabled: boolean, gold_user: { __typename?: 'gold_users', nickname?: string | null } }> };


export const TestQueryDocument = gql`
    query testQuery {
  test {
    id
  }
}
    `;
export const GetUserIdDocument = gql`
    query getUserId($user_id: String!) {
  users(limit: 1, where: {id: {_eq: $user_id}}) {
    id
  }
}
    `;
export const TeamNameOfMatchDocument = gql`
    query TeamNameOfMatch($team_id: String!, $user_id: String!) {
  teams(
    where: {id: {_eq: $team_id}, _and: {team_members: {team_id: {_eq: $team_id}, _and: {user_id: {_eq: $user_id}}}}}
  ) {
    name
    description
  }
}
    `;
export const MatchedTeamNameDocument = gql`
    query MatchedTeamName($team_id: String!, $user_id: String!) {
  team_member_by_pk(team_id: $team_id, user_id: $user_id) {
    team {
      description
      name
    }
  }
}
    `;
export const UserIdInTeamMemberDocument = gql`
    query UserIdInTeamMember($team_id: String!, $user_id: String!) {
  team_member_by_pk(team_id: $team_id, user_id: $user_id) {
    user_id
  }
}
    `;
export const TeamGoldMemberDocument = gql`
    query TeamGoldMember($team_id: String!) {
  team_gold_member(where: {team_id: {_eq: $team_id}}) {
    user_id
  }
}
    `;
export const PositionsSnapshotDocument = gql`
    query PositionsSnapshot($team_id: String!) {
  positions_snapshot(where: {team_gold_member: {team_id: {_eq: $team_id}}}) {
    user_id
    md5
    body
    created_at
    gold_user {
      nickname
    }
    disabled
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    testQuery(variables?: TestQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TestQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TestQueryQuery>(TestQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'testQuery', 'query');
    },
    getUserId(variables: GetUserIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserIdQuery>(GetUserIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserId', 'query');
    },
    TeamNameOfMatch(variables: TeamNameOfMatchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeamNameOfMatchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeamNameOfMatchQuery>(TeamNameOfMatchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeamNameOfMatch', 'query');
    },
    MatchedTeamName(variables: MatchedTeamNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MatchedTeamNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MatchedTeamNameQuery>(MatchedTeamNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MatchedTeamName', 'query');
    },
    UserIdInTeamMember(variables: UserIdInTeamMemberQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserIdInTeamMemberQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserIdInTeamMemberQuery>(UserIdInTeamMemberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UserIdInTeamMember', 'query');
    },
    TeamGoldMember(variables: TeamGoldMemberQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeamGoldMemberQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeamGoldMemberQuery>(TeamGoldMemberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeamGoldMember', 'query');
    },
    PositionsSnapshot(variables: PositionsSnapshotQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PositionsSnapshotQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PositionsSnapshotQuery>(PositionsSnapshotDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PositionsSnapshot', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;