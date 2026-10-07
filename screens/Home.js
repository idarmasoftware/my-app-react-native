import { View, Text, StyleSheet } from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home Page</Text>

			<View style={styles.welcomeCard}>
				<Text style={styles.welcomeTitle}>Hallo, Ibnu</Text>

				<Text style={styles.welcomeDescription}>
					Selamat datang di aplikasi mahasiswa. Semoga aktivitas kuliahmu hari
					ini berjalan lancar.
				</Text>
			</View>

			<Text style={styles.sectionTitle}>Aktivitas</Text>

			<View style={styles.grid}>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Tugas</Text>

					<Text style={styles.cardValue}>3</Text>

					<Text style={styles.cardDescription}>Tugas belum selesai</Text>
				</View>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>Jadwal</Text>

					<Text style={styles.cardValue}>2</Text>

					<Text style={styles.cardDescription}>Mata Kuliah hari ini</Text>
				</View>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>Absensi</Text>

					<Text style={styles.cardValue}>97%</Text>

					<Text style={styles.cardDescription}>semua mata kuliah</Text>
				</View>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>Pengumuman</Text>

					<Text style={styles.cardValue}>2</Text>

					<Text style={styles.cardDescription}>Pengumuman baru</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F7FA",
		padding: 20,
		paddingTop: 50,
	},

	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#111827",
	},

	welcomeCard: {
		backgroundColor: "#2563EB",
		borderRadius: 16,
		padding: 20,
		marginTop: 20,
	},

	welcomeTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#FFFFFF",
		marginBottom: 8,
	},

	welcomeDescription: {
		fontSize: 14,
		lineHeight: 20,
		color: "#DBEAFE",
	},

	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#111827",
		marginTop: 25,
		marginBottom: 15,
	},

	grid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},

	card: {
		width: "48%",
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		padding: 18,
		marginBottom: 15,
		elevation: 3,
	},

	cardTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#374151",
	},

	cardValue: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#2563EB",
		marginTop: 5,
	},

	cardDescription: {
		fontSize: 12,
		color: "#6B7280",
		marginTop: 3,
	},
});
