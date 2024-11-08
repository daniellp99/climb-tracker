CREATE TABLE `climbRoutine` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`iconName` text NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` integer,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
