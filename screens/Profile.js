import { StyleSheet, Text, View, Image } from "react-native";

export default function Profile() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>My Profile</Text>
				<Text style={styles.headerSubtitle}>Informasi profil mahasiswa</Text>
			</View>

			<View style={styles.card}>
				<View style={styles.imageWrapper}>
					<Image source={require("../assets/me.png")} style={styles.gambar} />
				</View>

				<Text style={styles.nama}>Ibnu Darma Maulana</Text>

				<View style={styles.divider} />

				<View style={styles.infoContainer}>
					<View style={styles.infoItem}>
						<Text style={styles.label}>NIM</Text>
						<Text style={styles.value}>43E57027205006</Text>
					</View>

					<View style={styles.infoItem}>
						<Text style={styles.label}>Program Studi</Text>
						<Text style={styles.value}>S1 Sistem Informasi</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F8FAFC",
		paddingHorizontal: 20,
		paddingTop: 60,
	},

	header: {
		marginBottom: 25,
	},

	headerTitle: {
		fontSize: 30,
		fontWeight: "700",
		color: "#111827",
	},

	headerSubtitle: {
		fontSize: 14,
		color: "#6B7280",
		marginTop: 5,
	},

	card: {
		backgroundColor: "#FFFFFF",
		borderRadius: 24,
		padding: 25,

		alignItems: "center",

		elevation: 5,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.08,
		shadowRadius: 10,
	},

	imageWrapper: {
		padding: 4,
		borderRadius: 70,
		borderWidth: 2,
		borderColor: "#2563EB",
		marginBottom: 15,
	},

	gambar: {
		width: 110,
		height: 110,
		borderRadius: 55,
	},

	nama: {
		fontSize: 22,
		fontWeight: "700",
		color: "#111827",
		textAlign: "center",
	},

	divider: {
		width: "100%",
		height: 1,
		backgroundColor: "#E5E7EB",
		marginVertical: 10,
	},

	infoContainer: {
		width: "100%",
		gap: 16,
	},

	infoItem: {
		backgroundColor: "#F8FAFC",
		borderRadius: 12,
		padding: 14,
	},

	label: {
		fontSize: 12,
		color: "#6B7280",
		marginBottom: 4,
	},

	value: {
		fontSize: 15,
		fontWeight: "600",
		color: "#111827",
	},
});
